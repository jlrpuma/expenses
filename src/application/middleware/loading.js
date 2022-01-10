import {pageLoaded, PAGE_LOADED} from '../actions/loading';
import * as expensesActions from '../actions/expenses';

const pageLoadedFlow = () => ({dispatch}) => next => action => {
    next(action)

    if (action.type === PAGE_LOADED) {
        // we don't have an implementation of logs
        // log(pageLoaded)
        dispatch(expensesActions.loadExpenses)
    }
}

export default [
    pageLoadedFlow
]