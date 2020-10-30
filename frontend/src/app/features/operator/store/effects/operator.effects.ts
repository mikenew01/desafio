import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {GetAllOperator, GetAllOperatorSuccess, MessageOperatorError} from '../actions/operator.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {OperatorService} from '../../services/operator.service';
import {Operator} from '../../../../shared/models/operator.model';

@Injectable()
export class OperatorEffects {

  constructor(private action$: Actions, private operatorService: OperatorService) {
  }

  getAllOperators$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(GetAllOperator),
      mergeMap(action => {
          return this.operatorService.findAll().pipe(
            map((res: Operator[]) => {
              return GetAllOperatorSuccess({payload: {operators: res}});
            }),
            catchError((error: Error) => {
              return of(MessageOperatorError({payload: {message: error.message}}));
            })
          );
        }
      )
    )
  );
}
