import { configureStore } from '@reduxjs/toolkit';
import candidateReducer from '../features/candidate/candidateSlice';
import companyReducer from '../features/company/companySlice';
import jobReducer from '../features/job/jobSlice';


export const store = configureStore({
  reducer: {
   candidate:candidateReducer,
   company:companyReducer,
   job:jobReducer
  }
});
