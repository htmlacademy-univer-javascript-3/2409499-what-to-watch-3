import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { userProcess } from './user-process/user-process';
import { filmProcess } from './film-process/film-process';
import { dataProcess } from './data-process/data-process';

export const reducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Films]: filmProcess.reducer,
  [NameSpace.Data]: dataProcess.reducer,
});