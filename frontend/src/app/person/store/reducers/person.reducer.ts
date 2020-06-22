import {Action} from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Person} from '../../../shared/models/person.model';
import {PersonActionTypes} from '../actions/person.action';

export const ENTITY_FEATURE_KEY = 'person';

export interface State extends EntityState<Person> {
  loaded: boolean;
  error?: Error | any;
}

export const adapter: EntityAdapter<Person> = createEntityAdapter<Person>({
  selectId: person => person.id
});

export const initialState: State = adapter.getInitialState({
  loaded: false,
  error: null
});

export function _reducer(
  state = initialState,
  action: any
) {
  switch (action.type) {
    case PersonActionTypes.GET_ALL_PERSONS_SUCCESS: {
      console.log('persons type', action.payload.persons);
      return adapter.addAll(action.payload.persons, {...state, loaded: true});
    }

    case PersonActionTypes.GET_PERSON_SUCCESS: {
      return adapter.addOne(action.payload.person, state);
    }

    case PersonActionTypes.UPDATE_PERSON_SUCCESS: {
      return adapter.updateOne({id: action.payload.person.id, changes: action.payload.person}, state);
    }

    case PersonActionTypes.CREATE_PERSON_SUCCESS: {
      return adapter.addOne(action.payload.person, state);
    }

    case PersonActionTypes.DELETE_PERSON_SUCCESS: {
      return adapter.removeOne(action.payload.id, state);
    }

    default: {
      return state;
    }
  }
}

export function personReducer(state: State | undefined, action: Action) {
  return _reducer(state, action);
}
