import React from 'react';
import './css-modules/Modal.css';
import {useHistory} from 'react-router-dom';
import Form from './Form.js';

const Modal=() => {
    const history = useHistory();
    const somefunc = function() {
        history.push("/");
    }
    return (
        <div className='modal active' onClick={somefunc}>
            <div className='modal__content active'  onClick={e=>e.stopPropagation()}>
                <Form />
            </div>
        </div>
    );
};
export default Modal;
