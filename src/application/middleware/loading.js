import * as uiActions from '../actions/loading'

const pageLoadedFlow = () => ({dispatch}) => next => action => {
    next(action)

    if (action.type === uiActions.PAGE_LOADED) {
        // we don't have an implementation of logs
        // log(pageLoaded)
        // dispatch(expensesActions.loadExpenses(''))
        dispatch(uiActions.setLoading(true))
    }
}

export default [
    pageLoadedFlow
]