import {shallow} from 'enzyme';
import React from 'react';
import BusinessesList from '../../components/business/businesses';

describe('BusinessesList component',() => {

    it('should match snapshot',() =>{
        const wrapper = shallow(<BusinessesList/>)
        expect(wrapper).toMatchSnapshot();
    })
})
