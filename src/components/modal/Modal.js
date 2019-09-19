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
            {
                props.state.isValidate ?
                    <div className="modal__succes-box">
                        <p>Parabéns, suas informações foram salvas com sucesso!</p>
                        <p>Informações do app:</p>
                        <div className="modal__succes-box__app-info">
                            <p>{`Nome: ${props.state.appName}`}</p>
                            <p>{`Categoria: ${props.state.appCategory}`}</p>
                            <p>{`Cor: ${props.state.mudaCor}`}</p>
                            <p>{`Url da imagem: ${props.state.files}`}</p>
                        </div>
                    </div>
                    :
                    null
            }
        </div>
    );
}

export default Modal;

