import React from 'react';
import { shallow } from 'enzyme';
import ErrorPage from './ErrorPage';

const setUp = (props={}) => {
    const component = shallow(<ErrorPage {...props} />);
    return component;
};

describe('ErrorPage Component', () => {

    let component;
    beforeEach(() => {
        component = setUp(); 
    });

    it('Should render without errors', () => {
        const wrapper = component.find("[data-test='component-errorpage']");
        expect(wrapper.length).toBe(1);
    });

   

});