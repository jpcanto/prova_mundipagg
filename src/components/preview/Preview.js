import React from 'react';

export default class Preview extends React.Component {
    render() {
        return (
            <div className="preview">
                <h2>APP'S CARD PREVIEW</h2>
                <div className="preview__corpo">
                    <div className="preview__corpo--caixa">
                        <img className="preview__corpo--caixa__img" src="./utils/img/default-app-icon.png" alt="default"/>
                    </div>
                    <div className="preview__corpo--descricao">
                        <h2>App Name</h2>
                        <p>App Category</p>
                        <p className="small">New App</p>
                    </div>
                </div>
                <button>SAVE APP</button>
            </div>
        );
    }
}