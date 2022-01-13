import {loadExpenses ,loadExpensesFailure, loadExpensesSuccess,LOAD_EXPENSES } from "../actions/expenses"
import * as uiActions from '../actions/loading'


/*
// you can use destruturing to take some attributes from the 
// storeAPI like dispatch and getState
const wrapperFlow = ({dispatch, getState})
// This function is the nex middleware in the pipeline 
// this is only called once                    
                    => (next)
// receive the curren action as its argument                     
                    => (action)

// const wrapperFlow = (storeAPI) => (next) => (action) => {}
*/

const loadExpensesFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action);

    if ( action.type === LOAD_EXPENSES ) {
        try {
            dispatch(uiActions.setLoading(true))
            let expenses = [];
            setTimeout(async () => {
                expenses = await api.expenses.getAll()
                dispatch(loadExpensesSuccess(expenses));
                dispatch(uiActions.setLoading(false));
            }, 2000);
        } catch (e) {
            dispatch(loadExpensesFailure(e))
        }
    }
}

export default [
    loadExpensesFlow
]