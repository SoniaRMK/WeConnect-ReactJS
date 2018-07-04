import {shallow} from 'enzyme';
import React from 'react';
import NavigationBar from '../../components/navBar/navigationBar';

describe('NavigationBar component',() => {

    it('should match snapshot',() =>{
        const wrapper = shallow(<NavigationBar/>)
        expect(wrapper).toMatchSnapshot();
    })
})
