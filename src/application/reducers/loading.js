import * as loadingActions from '../actions/loading'

const initialState = {
    loading: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case (loadingActions.SET_LOADING_ON):
        case (loadingActions.SET_LOADING_OFF):
            return { ...state, loading: action.payload };
        default:
            return state;
    }
}