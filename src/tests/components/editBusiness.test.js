import {shallow, mount} from 'enzyme';
import React from 'react';
import Weconnect from '../../store';
import { MemoryRouter } from 'react-router-dom';
import mockSessionStorage from '../sessionStorage';
import decode from 'jwt-decode';
import jwt from "jsonwebtoken";
import EditBusiness from '../../components/business/edit';

const loginUserMock = { token: jwt.sign({ user_email: "sonia@yahoo.com", user_password: "1234567890" }, "Oxa34KLncvfjKEjXkf")}
const businessDataMock = { business_name: "MTN-Uganda", business_profile: "Telecomm company in Uganda", 
                       location: "Kampala", category: "Telecommunications", id: 1};

describe('BusinessRegister component',() => {

    beforeEach(() => {
        Object.defineProperty(window, "sessionStorage", {
            value: mockSessionStorage
        });
        sessionStorage.setItem("access_token", loginUserMock.token);
        Weconnect.getState().getBusiness.getBusinessMessage = {businessDataMock}
    });

    it('should match snapshot',() =>{
        const wrapper = shallow(<EditBusiness/>)
        expect(wrapper).toMatchSnapshot();
    })

    it("should render the BusinessOne component", () => {
        const editBusinessComponent = mount(<MemoryRouter><EditBusiness store = {Weconnect}/></MemoryRouter>)
        expect(editBusinessComponent.length).toBe(1);
        
    });
})
