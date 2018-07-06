import {shallow} from 'enzyme';
import React from 'react';
import Categories from '../../components/business/categories';

describe('Categories component',() => {

    it('should match snapshot',() =>{
        const wrapper = shallow(<Categories/>)
        expect(wrapper).toMatchSnapshot();
    })
})
