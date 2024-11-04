import { combineReducers } from "redux";

import counter from './counter/counter.reducer';

const rootReducer = combineReducers({ counter });

export default rootReducer;