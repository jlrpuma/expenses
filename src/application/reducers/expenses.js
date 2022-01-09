import { LOAD_EXPENSES_SUCCESS, PUT_EXPENSE, SET_EXPENSES } from "../actions/expenses"

const initialState =  {
    allExpenses: [],
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_EXPENSES_SUCCESS:
            return { allExpenses: action.payload, error: null}
        case PUT_EXPENSE:
            console.log("PUT_EXPENSE")
            console.log(action.payload)
            return { allExpenses: action.payload, error: null}
        case SET_EXPENSES:
            return { allExpenses: action.payload, error: null}
        default:
            return state
    }
}
