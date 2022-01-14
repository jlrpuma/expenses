import { FILTER_EXPENSES, LOAD_EXPENSES, LOAD_EXPENSES_SUCCESS, PUT_EXPENSE, SET_EXPENSES } from "../actions/expenses"

const initialState =  {
    allExpenses: [],
    filter: '',
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FILTER_EXPENSES:
            return {...state, filter: action.payload}
        case LOAD_EXPENSES_SUCCESS:
            return {...state, allExpenses: action.payload}
        case PUT_EXPENSE:
            return {...state, allExpenses: action.payload}
        case SET_EXPENSES:
            return {...state, allExpenses: action.payload}
        default:
            return state
    }
}
