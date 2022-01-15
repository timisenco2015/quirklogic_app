import React from 'react';
import { shallow } from 'enzyme';
import GlobalModal from './GlobalModal';

const setUp = (props={}) => {
    const component = shallow(<GlobalModal {...props} />);
    return component;
};

describe('GlobalModal Component', () => {

    let component;
    beforeEach(() => {
        component = setUp(); 
    });

    it('Should render without errors', () => {
        const wrapper = component.find("[data-test='component-globalmodal']");
        expect(wrapper.length).toBe(1);
    });

    it('clicking on button to close dialog', () => {
        const button = component.find("[data-test='component-globalmodal-button']");
        button.simulate('click');
        
    });


    globalmodal-button

   

});