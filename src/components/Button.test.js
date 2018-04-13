import React from 'react';
import {shallow} from 'enzyme';

import Button from 'Components/Button';

describe('Test case button', () => {
    it('Should render text', () => {
        const wrapper = shallow(<Button text="Dodaj" />);
        expect(wrapper.find('button').props().children).toEqual('Dodaj');
    });

    it('Should call life-cycle method `shouldComponentUpdate`', () => {
        spyOn(Button.prototype, 'shouldComponentUpdate').and.callThrough();
        const wrapper = shallow(<Button text="Dodaj" />);
        wrapper.setProps({text: 'Nesto drugo'});
        expect(Button.prototype.shouldComponentUpdate).toHaveBeenCalledTimes(1);
    });

    it('Should not re-render', () => {
        const component = shallow(<Button text="Dodaj" />)
        const shouldUpdate = component.instance().shouldComponentUpdate({text: 'Dodaj'}, null);
        expect(shouldUpdate).toBe(false)
    });
});