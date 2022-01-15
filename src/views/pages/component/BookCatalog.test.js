import React from 'react';
import {shallow} from 'enzyme';
import BookCatalog from './BookCatalog';

const setUp = (props={})=>{
  const component = shallow(<BookCatalog/>);
  return component;
}
describe('BookCatalog Component',()=>{
  let component;
  beforeEach(()=>{
    component =setUp();
  });

  it('It should render without errors',()=>{
      const wrapper = component.find("[data-test='component-bookcatalog']");
      expect(wrapper.length).toBe(1);
  });

  it('It should render without errorssss',()=>{
    //const toggle = component.find("[data-test='component-bookcatalog-button-toggle']");
    const addBookComponent =component.find("[data-test='component-bookcatalog-addbookwidget']");
    const viewBookComponent = component.find("[data-test='component-bookcatalog-viewbookwidget']");
    //toggle.simulate('click');
    //expect(viewBookComponent.exists()).toBe(false);
    //expect(addBookComponent.exists()).toBe(true);
});
});
