import {combineReducers} from 'redux';
import stepperSlice from './stepperSlice';
import uiSlice from './uiSlice';

const rootReducer = combineReducers({
  ui: uiSlice.reducer,
  stepper: stepperSlice.reducer,
});

export default rootReducer;
