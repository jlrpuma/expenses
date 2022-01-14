import { FILTER_EXPENSES, loadExpenses, loadExpensesFailure, loadExpensesSuccess, LOAD_EXPENSES } from "../actions/expenses"
import * as uiActions from '../actions/loading'

const loadExpensesFlow = ({ api }) => ({ dispatch }) => next => async (action) => {
    next(action);

    if (action.type === LOAD_EXPENSES) {
        try {
            let expenses = [];
            expenses = await api.expenses.getAll('')
            dispatch(loadExpensesSuccess(expenses));
            dispatch(uiActions.setLoading(false));
        } catch (e) {
            dispatch(loadExpensesFailure(e))
        }
    }
}

const filterExpensesFlow = ({ api }) => ({ dispatch }) => next => async (action) => {
    next(action);
    if (action.type === FILTER_EXPENSES) {
        try {
            let expenses = [];
            expenses = await api.expenses.getAll(action.payload)
            dispatch(loadExpensesSuccess(expenses));
            dispatch(uiActions.setLoading(false));
        } catch (e) {
            dispatch(loadExpensesFailure(e))
        }
    }
}

export default [
    loadExpensesFlow,
    filterExpensesFlow
]