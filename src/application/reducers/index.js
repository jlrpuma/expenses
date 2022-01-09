import { combineReducers } from "@reduxjs/toolkit";
import loading from './loading';
import expenses from './expenses';

export default combineReducers({
    loading,
    expenses
})