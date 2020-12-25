const SEND_FORM = 'SENDFORM';
const COMPLETE_FORM = 'COMPLETEFORM';
const ERROR_FORM = 'ERRORFORM';

let initialState = {
    send: false,
    error: null,
    complete: false,
};

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_FORM:
            state.send = true;
            state.error = null;
            state.complete = false;
            return state;
        case COMPLETE_FORM:
            state.send = false;
            state.error = null;
            state.complete = true;
            return state;
        case ERROR_FORM:
            state.send = false;
            state.error = action.err;
            state.complete = false;
            return state;
        default:
            return state;
    }
}

export const sendFormCreator = () => ({ type: SEND_FORM });
export const completeFormCreator = () => ({ type: COMPLETE_FORM });
export const errorFormCreator = (err) => ({ type: ERROR_FORM, err: err });

export default formReducer;