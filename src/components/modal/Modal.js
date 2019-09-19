import React from 'react';

const Modal = (props) => {
    return (
        <div className="modal">
            {
                props.state.onAppClose ?
                    <div className="modal__message-box">
                        <p>Você está finalizando o app, todas as alterações serão perdidas!</p>
                    </div>
                    :
                    null
            }
        </div>
    );
}

export default Modal;

