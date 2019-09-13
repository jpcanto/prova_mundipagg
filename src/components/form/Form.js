import React from 'react';

const Form = () => (
    <section className="formulario">
        <h1>Create Your App</h1>
        <h2>APP NAME</h2>
        <input type="text" placeholder="Enter App Display Name"></input>
        <h2>APP ICON</h2>
        <div className="formulario__icone">
            <p>Select a File</p>
            <button className="formulario__icone__select-file">SELECT A FILE</button>
        </div>
        <h2>ICON'S BACKGROUND COLOR</h2>
        <div className="formulario__cor">
            <p>Pick a color</p>
            <button className="formulario__cor__select-color">#191919</button>
        </div>
        <h2>CATEGORY</h2>
        <div className="formulario__categoria">
            <select>
                <option>Select a Category</option>
                <option>Categoria 1</option>
                <option>Categoria 2</option>
            </select>
        </div>
    </section>
);

export default Form;