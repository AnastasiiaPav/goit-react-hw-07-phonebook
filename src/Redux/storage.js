import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contaSlise';
import { filterSlice } from './filterSlise';

export const storage =  configureStore({
  reducer:{
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  }
})