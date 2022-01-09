export const LOAD_EXPENSES = '[expenses] load'
export const LOAD_EXPENSES_SUCCESS = '[expenses] load success'
export const LOAD_EXPENSES_FAILURE = '[expenses] load failure'
export const SET_EXPENSES = '[expenses] set'
export const PUT_EXPENSE = '[expenses] put'

export const loadExpenses = {
    type: LOAD_EXPENSES,
}

export const loadExpensesSuccess = todos => ({
    type: LOAD_EXPENSES_SUCCESS,
    payload: todos
})

export const loadExpensesFailure = error => ({
    type: LOAD_EXPENSES_FAILURE,
    payload: error
})

export const setExpenses = expenses => ({
    type: SET_EXPENSES,
    payload: expenses
})

export const putExpense = expenses => ({
    type: PUT_EXPENSE,
    payload: expenses
})