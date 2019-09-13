import React from 'react';
import { ChromePicker } from "react-color";

export default class Form extends React.Component {

    state = {
        displayColorPicker: false,
        defaultColor: "#191919",
        changeColor: "#191919",
        color: {
            r: "0",
            g: "9",
            b: "153",
            a: "1"
        }
    };

    onHandleShowColorPicker = () => {
        this.setState({ displayColorPicker: true });
    };

    onHandleCloseColorPicker = () => {
        this.setState({ displayColorPicker: false });
    };

    onChangeColorPicker = color => {
        this.setState({ color: color.rgb, changeColor: color.hex });
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
                    <button className="formulario__cor__select-color" style={{background: this.state.changeColor}} onClick={() => this.onHandleShowColorPicker()}>{this.state.changeColor}</button>
                    {this.state.displayColorPicker && (
                        <div className={"formulario__cor-caixa"}>
                            <div
                                className={"formulario__cor-caixa--fecha"}
                                onClick={() => this.onHandleCloseColorPicker()}
                            />
                            <ChromePicker
                                color={this.state.color}
                                onChange={this.onChangeColorPicker}
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
