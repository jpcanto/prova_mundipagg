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