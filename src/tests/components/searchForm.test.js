import {shallow} from 'enzyme';
import React from 'react';
import SearchFilters from '../../components/business/searchForm';

describe('SearchForm component',() => {

    it('should match snapshot',() =>{
        const wrapper = shallow(<SearchFilters/>)
        expect(wrapper).toMatchSnapshot();
    })
})
