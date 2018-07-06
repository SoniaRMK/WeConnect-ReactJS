import {shallow, mount} from 'enzyme';
import React from 'react';
import Weconnect from '../../store';
import { MemoryRouter } from 'react-router-dom';
import mockSessionStorage from '../sessionStorage';
import decode from 'jwt-decode';
import jwt from "jsonwebtoken";
import BusinessRegister from '../../components/business/register';

const loginUserMock = { token: jwt.sign({ user_email: "sonia@yahoo.com", user_password: "1234567890" }, "Oxa34KLncvfjKEjXkf")}

describe('BusinessRegister component',() => {

    beforeEach(() => {
        Object.defineProperty(window, "sessionStorage", {
            value: mockSessionStorage
        });
        sessionStorage.setItem("access_token", loginUserMock.token);
    });

    it('should match snapshot',() =>{
        const wrapper = shallow(<BusinessRegister/>)
        expect(wrapper).toMatchSnapshot();
    })

    it("should render the BusinessOne component", () => {
        const businessRegisterComponent = mount(<MemoryRouter><BusinessRegister store = {Weconnect}/></MemoryRouter>)
        expect(businessRegisterComponent.length).toBe(1);
        
    });

    it('checks that the create business form submits', ()=>{
        const businessRegisterComponent = mount(<MemoryRouter><BusinessRegister store = {Weconnect}/></MemoryRouter>)
        let business_name = businessRegisterComponent.find('input[name="businessName"]')
        business_name.simulate('change', {target:{value: 'URA'}});
        let business_profile = businessRegisterComponent.find('textarea[name="descr"]')
        business_profile.simulate('change', {target:{value: 'For tax collection and returns'}});
        let location = businessRegisterComponent.find('select[name="location"]')
        location.simulate('change', {target:{value: 'Kampala'}});
        let category = businessRegisterComponent.find('select[name="category"]')
        category.simulate('change', {target:{value: 'Consulting'}});
        businessRegisterComponent.find('form.registerBusinessForm').simulate('submit');
    });
})
