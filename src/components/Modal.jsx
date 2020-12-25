import React from 'react';
import './css-modules/Modal.css';
import {useHistory} from 'react-router-dom';
import Form from './Form.js';

const Modal=(props) => {
    const history = useHistory();
    const somefunc = function() {
        history.push("/webexam-react");
    }
    return (
        <div className='modal active' onClick={somefunc}>
            <div className='modal__content active'  onClick={e=>e.stopPropagation()}>
                <Form state={props.state} store={props.store} dispatch={props.store.dispatch.bind(props.store)} />
            </div>
        </div>
    );
};
export default Modal;
