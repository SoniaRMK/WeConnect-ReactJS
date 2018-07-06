import {shallow, mount} from 'enzyme';
import React from 'react';
import ResetPassword from '../../components/user/resetPassword';
import Weconnect from '../../store';
import { MemoryRouter } from 'react-router-dom';
import mockSessionStorage from '../sessionStorage';
import decode from 'jwt-decode';
import jwt from "jsonwebtoken";


const loginUserMock = { token: jwt.sign({ user_email: "sonia@yahoo.com", user_password: "1234567890" }, "Oxa34KLncvfjKEjXkf") 
                   };
describe('user reset password component',() => {

    beforeEach(() => {
        Object.defineProperty(window, "sessionStorage", {
            value: mockSessionStorage
        });
        sessionStorage.setItem("access_token", loginUserMock.token);
    });

    it('should match snapshot',() =>{
        const wrapper = shallow(<ResetPassword/>)
        expect(wrapper).toMatchSnapshot();
    })

    it("should render the user reset password form", () => {
        const userComponent = mount(<MemoryRouter><ResetPassword store = {Weconnect}/></MemoryRouter>)
        expect(userComponent.length).toBe(1);
        
    });

    it('checks that the user reset password form submits', ()=>{
        const userComponent = mount(<MemoryRouter><ResetPassword store = {Weconnect}/></MemoryRouter>)
        let user_email = userComponent.find('input[name="email"]')
        user_email.simulate('change', {target:{value: 'soniqueq@g.com'}});
        let user_password = userComponent.find('input[name="psswd"]')
        user_password.simulate('change', {target:{value: 'qwertyuiop'}});
        let confirm_password = userComponent.find('input[name="psswd1"]')
        confirm_password.simulate('change', {target:{value: 'qwertyuiop'}});
        userComponent.find('form.resetPassword').simulate('submit');
    });
})
