import {Injectable} from '@angular/core';

import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs';
import {PersonService} from '../../services/person.service';
import {
  CreatePerson,
  CreatePersonSuccess,
  DeletePerson,
  DeletePersonSuccess,
  GetAllPersons,
  GetAllPersonsSuccess,
  GetPerson,
  GetPersonSuccess,
  MessageError,
  MessageSuccess,
  PersonActionTypes,
  UpdatePerson,
  UpdatePersonSuccess
} from '../actions/person.action';
import {Resposta} from '../../../../shared/models/resposta.model';
import {NotificationService} from '../../../../core/services/notification.service';

@Injectable()
export class PersonEffects {

  constructor(private actions$: Actions,
              private personService: PersonService,
              private notificationService: NotificationService) {
  }

  @Effect()
  getAllPersons$ = this.actions$.pipe(
    ofType(PersonActionTypes.GET_ALL_PERSONS),
    switchMap((action: GetAllPersons) => this.personService.findAll().pipe(
      map((res: Resposta) => new GetAllPersonsSuccess({persons: res.data})),
      catchError(error => of(new MessageError({message: error.error[0].msg, locationBack: false})))
      )
    )
  );

  @Effect()
  getPerson$ = this.actions$.pipe(
    ofType(PersonActionTypes.GET_PERSON),
    switchMap((action: GetPerson) =>
      this.personService.get(action.payload.id).pipe(
        map((res: Resposta) => new GetPersonSuccess({person: res.data})),
        catchError(error => of(new MessageError({message: error.error[0].msg, locationBack: false})))
      )
    )
  );

  @Effect()
  updatePerson$ = this.actions$.pipe(
    ofType(PersonActionTypes.UPDATE_PERSON),
    switchMap((action: UpdatePerson) =>
      this.personService.update(action.payload.person).pipe(
        mergeMap((res: Resposta) => [
          new UpdatePersonSuccess({person: res.data}),
          new MessageSuccess({message: res.mensage})
        ]),
        catchError(error => of(new MessageError({message: error.error[0].msg, locationBack: false})))
      )
    )
  );

  @Effect()
  createPerson$ = this.actions$.pipe(
    ofType(PersonActionTypes.CREATE_PERSON),
    switchMap((action: CreatePerson) =>
      this.personService.save(action.payload.person).pipe(
        mergeMap((res: Resposta) => [
          new CreatePersonSuccess({person: res.data}),
          new MessageSuccess({message: res.mensage})
        ]),
        catchError(error => of(new MessageError({message: error.error[0].msg, locationBack: false})))
      )
    )
  );

  @Effect()
  deletePerson$ = this.actions$.pipe(
    ofType(PersonActionTypes.DELETE_PERSON),
    switchMap((action: DeletePerson) =>
      this.personService.delete(action.payload.id).pipe(
        mergeMap((res: Resposta) => [
          new DeletePersonSuccess({id: res.data}),
          new GetAllPersons(),
          new MessageSuccess({message: res.mensage})
        ]),
        catchError(error => of(new MessageError({message: error.error[0].msg, locationBack: true})))
      )
    )
  );

  @Effect({dispatch: false})
  notificationSuccess$ = this.actions$.pipe(
    ofType(PersonActionTypes.MESSAGE_SUCCESS),
    tap((action: MessageSuccess) => this.notificationService.success(action.payload.message, true))
  );

  @Effect({dispatch: false})
  notificationError$ = this.actions$.pipe(
    ofType(PersonActionTypes.MESSAGE_ERROR),
    tap((action: MessageError) => this.notificationService.error(action.payload.message, action.payload.locationBack))
  );
}
