import {shallow} from 'enzyme';
import React from 'react';
import BusinessOne from '../../components/business/business';

describe('BusinessOne component',() => {

    it('should match snapshot',() =>{
        const wrapper = shallow(<BusinessOne/>)
        expect(wrapper).toMatchSnapshot();
    })
})
