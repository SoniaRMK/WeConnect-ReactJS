import {shallow} from 'enzyme';
import React from 'react';
import SubmitButton from '../../components/helper/submitButton';


describe('SubmitButton component',() => {

  it('should match snapshot',() =>{
      const wrapper = shallow(<SubmitButton/>)
      expect(wrapper).toMatchSnapshot();
  })
})
