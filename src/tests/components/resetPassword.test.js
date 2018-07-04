import {shallow} from 'enzyme';
import React from 'react';
import ResetPassword from '../../components/user/resetPassword';

describe('user reset password component',() => {

    it('should match snapshot',() =>{
        const wrapper = shallow(<ResetPassword/>)
        expect(wrapper).toMatchSnapshot();
    })
})
