import {shallow} from 'enzyme';
import React from 'react';
import Locations from '../../components/business/locations';

describe('Locations component',() => {

    it('should match snapshot',() =>{
        const wrapper = shallow(<Locations/>)
        expect(wrapper).toMatchSnapshot();
    })
})
