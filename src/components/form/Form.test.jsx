import React from 'react';
import Form from './Form.js';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

describe('Testando renderização do componente Form', () => {
    it("Deve renderizar corretamente", () => {

        const wrapper = mount(
            <Form />
        );

        expect(toJson(wrapper)).toMatchSnapshot()

    });
});

describe('Testando chamada do color picker', () => {
    it("Deve abrir o color picker ao clicar no botão", () => {

        const wrapper = mount(
            <Form />
        );

        expect(wrapper.state('visualizaColorPicker')).toBe(false);
        wrapper.find('.formulario__cor__select-color').simulate('click');
        expect(wrapper.state('visualizaColorPicker')).toBe(true)

    });

    it("Deve fechar o color picker ao clicar fora da caixa", () => {

        const wrapper = mount(
            <Form />
        );

        wrapper.setState({
            visualizaColorPicker: true
        })

        expect(wrapper.state('visualizaColorPicker')).toBe(true);
        wrapper.find('.formulario__cor-caixa--fecha').simulate('click');
        expect(wrapper.state('visualizaColorPicker')).toBe(false)

    });
});