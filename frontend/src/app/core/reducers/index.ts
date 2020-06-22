import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../../environments/environment';


import * as fromPerson from '../../features/person/store/reducers/person.reducer';


export interface State {
  [fromPerson.ENTITY_FEATURE_KEY]: fromPerson.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromPerson.ENTITY_FEATURE_KEY]: fromPerson.personReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
