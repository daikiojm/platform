import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '<%= environmentsPath %>';

export interface <%= classify(name) %> {

}

export const reducers: ActionReducerMap<<%= classify(name) %>> = {

};


export const metaReducers: MetaReducer<<%= classify(name) %>>[] = !environment.production ? [] : [];
