export default (state=[],action) => {
    switch (action.type){
        case 'SENDFORM':
            return [
                ...state, 
                {
                    send: true,
                    error: null,
                }
            ]
        case 'COMPLETEFORM':
            return [
                ...state, 
                {
                    send:false,
                    error:null,
                }
            ]
        case 'ERRORFORM':
            return [
                ...state,
                {
                    send:false,
                    error:'sas',
                }
            ]
        default:
            return state
    }
}