import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/form/Form';
import Preview from './components/preview/Preview';
import './styles/css/main.css';

ReactDOM.render(
    <section className="conteudo-principal">
        <Form />
        <Preview />
    </section>,
    document.getElementById('root')
);
