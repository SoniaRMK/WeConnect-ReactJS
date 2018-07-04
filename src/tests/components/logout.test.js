import {shallow, mount} from 'enzyme';
import React from 'react';
import Weconnect from '../../store';
import { MemoryRouter } from 'react-router-dom';
import mockSessionStorage from '../sessionStorage';
import decode from 'jwt-decode';
import jwt from "jsonwebtoken";
import LogoutUser from '../../components/user/logout';


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
        const wrapper = shallow(<LogoutUser/>)
        expect(wrapper).toMatchSnapshot();
    })

    it("should render the logout component", () => {
        const userComponent = mount(<MemoryRouter><LogoutUser store = {Weconnect}/></MemoryRouter>)
        expect(userComponent.length).toBe(1);
        
    });
})
