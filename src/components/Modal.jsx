import React from 'react';
import './css-modules/Modal.css';
import {useHistory} from 'react-router-dom';
import Form from './Form.js';
import {Provider} from 'react-redux';

const Modal=() => {
    const history = useHistory();
    const somefunc = function() {
        history.push("/");
    }
    return (
        <Provider store={store}>
        <div className='modal active' onClick={somefunc}>
            <div className='modal__content active'  onClick={e=>e.stopPropagation()}>
                <Form send={store.getState()} sendForm={()=>store.dispatch({type:'SENDFORM'})} completeForm={()=>store.dispatch({type:'COMPLETEFORM'})} errorForm={()=>store.dispatch({type:'ERRORFORM'})}/>
            </div>
        </div>
        </Provider>
    );
};
export default Modal;