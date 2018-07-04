import {shallow, mount} from 'enzyme';
import React from 'react';
import User from '../../components/user/user';

describe('user component',() => {
    let wrapper;

    it('should match snapshot',() =>{
        wrapper = shallow(<User/>)
        expect(wrapper).toMatchSnapshot();
    })

})
