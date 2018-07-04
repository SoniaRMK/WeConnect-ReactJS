import {shallow} from 'enzyme';
import React from 'react';
import BusinessRegister from '../../components/business/register';

describe('BusinessRegister component',() => {

    it('should match snapshot',() =>{
        const wrapper = shallow(<BusinessRegister/>)
        expect(wrapper).toMatchSnapshot();
    })
})
