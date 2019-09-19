import React from 'react';
import Modal from './Modal.js';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import toJson from "enzyme-to-json";

configure({adapter: new Adapter()});

describe('Testando renderização do componente Modal', () => {
    it("Deve renderizar corretamente", () => {

        const state = {
            onAppClose: true,
        }

        const wrapper = mount(
            <Modal state={state}/>
        );

        expect(toJson(wrapper)).toMatchSnapshot()

    });
});