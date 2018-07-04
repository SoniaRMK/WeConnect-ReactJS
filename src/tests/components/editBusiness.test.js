import {shallow} from 'enzyme';
import React from 'react';
import EditBusiness from '../../components/business/edit';

describe('BusinessRegister component',() => {

    it('should match snapshot',() =>{
        const wrapper = shallow(<EditBusiness/>)
        expect(wrapper).toMatchSnapshot();
    })
})
