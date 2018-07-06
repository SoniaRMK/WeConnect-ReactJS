import {shallow} from 'enzyme';
import React from 'react';
import FooterBar from '../../components/navBar/footerBar';

describe('FooterBar component',() => {

    it('should match snapshot',() =>{
        const wrapper = shallow(<FooterBar/>)
        expect(wrapper).toMatchSnapshot();
    })
})
