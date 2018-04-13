import React from 'react';
import {shallow} from 'enzyme';

import Button from 'Components/Button';

describe('Test case button', () => {
    it('Should render text', () => {
        const wrapper = shallow(<Button text="Dodaj" handler={jest.fn()} />);
        expect(wrapper.find('button').props().children).toEqual('Dodaj');
    });

    it('Should call life-cycle method `shouldComponentUpdate`', () => {
        spyOn(Button.prototype, 'shouldComponentUpdate').and.callThrough();
        const wrapper = shallow(<Button text="Dodaj" handler={jest.fn()} />);
        wrapper.setProps({text: 'Nesto drugo'});
        expect(Button.prototype.shouldComponentUpdate).toHaveBeenCalledTimes(1);
    });

    it('Should not re-render', () => {
        const component = shallow(<Button text="Dodaj" handler={jest.fn()} />)
        const shouldUpdate = component.instance().shouldComponentUpdate({text: 'Dodaj'}, null);
        expect(shouldUpdate).toBe(false)
    });

    it('Should call handler', () => {
        const onClickFn = jest.fn();
        const wrapper = shallow(<Button text="Dodaj" handler={onClickFn} />);
        wrapper.find('button').simulate('click');
        expect(onClickFn).toHaveBeenCalledTimes(1);
    });
});