const SEND_FORM = 'SENDFORM';
const COMPLETE_FORM = 'COMPLETEFORM';
const ERROR_FORM = 'ERRORFORM';
const OPEN_FORM = 'OPEN_FORM';

let initialState = {
    send: false,
    error: null,
    complete: false,
    open: false,
};

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_FORM:
            state.send = true;
            state.error = null;
            state.complete = false;
            state.open = true;
            return state;
        case COMPLETE_FORM:
            state.send = false;
            state.error = null;
            state.complete = true;
            state.open = true;
            return state;
        case ERROR_FORM:
            state.send = false;
            state.error = action.err;
            state.complete = false;
            state.open = true;
            return state;
        case OPEN_FORM:
            state.send = false;
            state.error = null;
            state.complete = false;
            state.open = true;
            return state;
        default:
            return state;
    }
}

export const sendFormCreator = () => ({ type: SEND_FORM });
export const completeFormCreator = () => ({ type: COMPLETE_FORM });
export const errorFormCreator = (err) => ({ type: ERROR_FORM, err: err });
export const openFormCreator = () => ({ type: OPEN_FORM });

export default formReducer;
