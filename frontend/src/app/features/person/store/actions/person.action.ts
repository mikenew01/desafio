import {Action} from '@ngrx/store';
import {Person} from '../../../../shared/models/person.model';

export enum PersonActionTypes {
  GET_ALL_PERSONS = '@person/GET_ALL_PERSONS',
  GET_ALL_PERSONS_SUCCESS = '@person/GET_ALL_PERSONS_SUCCESS',

  GET_PERSON = '@person/GET_PERSON',
  GET_PERSON_SUCCESS = '@person/GET_PERSON_SUCCESS',

  UPDATE_PERSON = '@person/UPDATE_PERSON',
  UPDATE_PERSON_SUCCESS = '@person/UPDATE_PERSON_SUCCESS',

  CREATE_PERSON = '@person/CREATE_PERSON',
  CREATE_PERSON_SUCCESS = '@person/CREATE_PERSON_SUCCESS',

  DELETE_PERSON = '@person/DELETE_PERSON',
  DELETE_PERSON_SUCCESS = '@person/DELETE_PERSON_SUCCESS',

  MESSAGE_SUCCESS = '@person/MESSAGE_SUCCESS',
  MESSAGE_ERROR = '@person/MESSAGE_ERROR'
}

export class GetAllPersons implements Action {
  readonly type = PersonActionTypes.GET_ALL_PERSONS;

  constructor() {
  }
}

export class GetAllPersonsSuccess implements Action {
  readonly type = PersonActionTypes.GET_ALL_PERSONS_SUCCESS;

  constructor(public payload: { persons: Person[] }) {
  }
}

export class GetPerson implements Action {
  readonly type = PersonActionTypes.GET_PERSON;

  constructor(public payload: { id: number }) {
  }
}

export class GetPersonSuccess implements Action {
  readonly type = PersonActionTypes.GET_PERSON_SUCCESS;

  constructor(public payload: { person: Person }) {
  }
}

export class UpdatePerson implements Action {
  readonly type = PersonActionTypes.UPDATE_PERSON;

  constructor(public payload: { person: Person }) {
  }
}

export class UpdatePersonSuccess implements Action {
  readonly type = PersonActionTypes.UPDATE_PERSON_SUCCESS;

  constructor(public payload: { person: Person }) {
  }
}

export class CreatePerson implements Action {
  readonly type = PersonActionTypes.CREATE_PERSON;

  constructor(public payload: { person: Person }) {
  }
}

export class CreatePersonSuccess implements Action {
  readonly type = PersonActionTypes.CREATE_PERSON_SUCCESS;

  constructor(public payload: { person: Person }) {
  }
}

export class DeletePerson implements Action {
  readonly type = PersonActionTypes.DELETE_PERSON;

  constructor(public payload: { id: number }) {
  }
}

export class DeletePersonSuccess implements Action {
  readonly type = PersonActionTypes.DELETE_PERSON_SUCCESS;

  constructor(public payload: { id: number }) {
  }
}

export class MessageSuccess implements Action {
  readonly type = PersonActionTypes.MESSAGE_SUCCESS;

  constructor(public payload: { message: string }) {
  }
}

export class MessageError implements Action {
  readonly type = PersonActionTypes.MESSAGE_ERROR;

  constructor(public payload: { message: string, locationBack: boolean }) {
  }
}

export const fromPersonActions = {
  GetAllPersons,
  GetAllPersonsSuccess,
  UpdatePerson,
  UpdatePersonSuccess,
  CreatePerson,
  CreatePersonSuccess,
  DeletePerson,
  DeletePersonSuccess,
  MessageError
};
