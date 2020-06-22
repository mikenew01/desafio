import {createFeatureSelector, createSelector,} from '@ngrx/store';
import {adapter, ENTITY_FEATURE_KEY, State} from '../reducers/person.reducer';

export const selectFeature = createFeatureSelector<State>(ENTITY_FEATURE_KEY);

const {selectIds, selectAll, selectTotal} = adapter.getSelectors();

export const selectPersonIds = createSelector(selectFeature, selectIds);

export const selectAllPersons = createSelector(selectFeature, selectAll);

export const selectPersonCount = createSelector(selectFeature, selectTotal);

export const selectPersonLoaded = createSelector(selectFeature, state => state.loaded);

export const selectError = createSelector(selectFeature, state => state.error);

export const selectPerson = createSelector(selectFeature, (state: State, prop: { id?: string }) => state.entities[prop.id]);


