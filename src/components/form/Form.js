import React from 'react'
import { ChromePicker } from "react-color"
import Files from 'react-files'
import Modal from './../modal/Modal';

export default class Form extends React.Component {

    state = {
        appName: 'App Name',
        appCategory: 'App Category',
        visualizaColorPicker: false,
        mudaCor: '#191919',
        color: {},
        files: [],
        onAppClose: false,
    }

    onFilesChange = (files) => {
        if (this.state.files.length < 1) {
            this.setState({
                files
            })
        } else {
            alert('Você já selecionou uma imagem');
        }
    }

    onFilesError = (error, file) => {
        console.log(`erro código: ${error.code} ${error.message}`)
    }

    mostraColorPicker = () => {
        this.setState({ visualizaColorPicker: true });
    };

    escondeColorPicker = () => {
        this.setState({ visualizaColorPicker: false });
    };

    mudaColorPicker = color => {
        this.setState({ color: color.rgb, mudaCor: color.hex });
        if (this.state.color.a < 1) {
            this.setState({
                mudaCor: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`
            })
        }
    };

    validateForms = () => {
        if (this.state.appName === 'App Name' || this.state.appName === '') {
            alert('É necessário escolher algum nome');
        } else if (this.state.files <= 0) {
            alert('É necessário escolher alguma imagem');
        } else if (this.state.mudaCor === '#191919') {
            alert('É necessário escolher alguma cor');
        } else if (this.state.appCategory === 'App Category') {
            alert('É necessário escolher alguma categoria');
        } else {
            this.setState({ isvalidate: true })
        }
    }

    salvaAppInfo = () => {
        this.validateForms();
        if (this.state.isvalidate) {
            alert(`Dados enviados com sucesso!!`)
            console.log(`Nome: ${this.state.appName}`)
            console.log(`Imagem url: ${this.state.files}`)
            console.log(`Cor hex: ${this.state.mudaCor}`)
            console.log(`Categoria: ${this.state.appCategory}`)
        }
    }

    closeApp = () => {
        this.setState({
            onAppClose: !this.state.onAppClose,
            appName: 'App Name',
            appCategory: 'App Category',
            mudaCor: '#191919',
        })
        this.refs.appNameInput.value = '';
    }

    render() {
        return (
            <section className="conteudo-principal">

                {this.state.onAppClose ? <Modal state={this.state} /> : null}

                <div className="formulario">

                    <h1>Create Your App</h1>
                    <button className="formulario__fecha" onClick={() => this.closeApp()}>X</button>
                    <h2>APP NAME</h2>
                    <input
                        type="text"
                        ref="appNameInput"
                        onChange={(e) => this.setState({ appName: e.target.value })}
                        placeholder="Enter App Display Name">
                    </input>

                    <h2>APP ICON</h2>
                    <div className="formulario__icone">
                        <Files
                            ref='files'
                            className='files-dropzone'
                            onChange={this.onFilesChange}
                            onError={this.onFilesError}
                            accepts={['image/*']}
                            multiple={false}
                            clickable
                        > <div className="formulario__icone__select-box">
                                <p>Select a File</p>
                                <button className="formulario__icone__select-box__file">SELECT A FILE</button>
                            </div>
                        </Files>
                    </div>

                    <h2>ICON'S BACKGROUND COLOR</h2>
                    <div className="formulario__cor">
                        <p>Pick a color</p>
                        <button className="formulario__cor__select-color" style={{ background: this.state.mudaCor }} onClick={() => this.mostraColorPicker()}>{this.state.mudaCor}</button>
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
                        <select onChange={(e) => this.setState({ appCategory: e.target.value })}>
                            <option>Select a Category</option>
                            <option>Técnologia e informação</option>
                            <option>Educação</option>
                            <option>Hospitalar</option>
                            <option>Esportes</option>
                        </select>
                    </div>

                </div>

                <div className="preview">
                    <h2>APP'S CARD PREVIEW</h2>
                    <div className="preview__corpo">
                        <div className="preview__corpo--caixa" style={{ background: this.state.mudaCor }}>
                            {
                                this.state.files.length > 0 ?
                                    <div className='files-gallery'>
                                        {this.state.files.map((file) =>
                                            <img className='files-gallery-item' src={file.preview.url} key={file.id} alt='selected-file' />
                                        )}
                                    </div>
                                    : <img className='files-gallery-item' src="https://cdn2.iconfinder.com/data/icons/status-solid-style/24/close-circle-512.png"></img>
                            }
                        </div>
                        <div className="preview__corpo--descricao">
                            <h2>{this.state.appName}</h2>
                            <p>{this.state.appCategory}</p>
                            <p className="small">New App</p>
                        </div>
                    </div>
                    <button onClick={this.salvaAppInfo}>SAVE APP</button>
                </div>

            </section>
        )
    }
}
