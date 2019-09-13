import React from 'react';
import { ChromePicker } from "react-color";

export default class Form extends React.Component {

    state = {
        visualizaColorPicker: false,
        mudaCor: "#191919",
        color: {}
    };

    mostraColorPicker = () => {
        this.setState({ visualizaColorPicker: true });
    };

    escondeColorPicker = () => {
        this.setState({ visualizaColorPicker: false });
    };

    mudaColorPicker = color => {
        this.setState({ color: color.rgb, mudaCor: color.hex });
    };

    render() {
        return (
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
                    <button className="formulario__cor__select-color" style={{background: this.state.mudaCor}} onClick={() => this.mostraColorPicker()}>{this.state.mudaCor}</button>
                    {this.state.visualizaColorPicker && (
                        <div className={"formulario__cor-caixa"}>
                            <div
                                className={"formulario__cor-caixa--fecha"}
                                onClick={() => this.escondeColorPicker()}
                            />
                            <ChromePicker
                                color={this.state.color}
                                onChange={this.mudaColorPicker}
                            />
                        </div>
                    )}
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
        )
    }
}
