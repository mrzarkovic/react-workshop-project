import React from 'react';
import {shallow} from 'enzyme';

import Button from 'Components/Button';

describe('Test case button', () => {
    it('Should render text', () => {
        const wrapper = shallow(<Button text="Dodaj" />);
        expect(wrapper.find('button').props().children).toEqual('Dodaj');
    });
});