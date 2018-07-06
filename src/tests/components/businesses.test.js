import {shallow, mount} from 'enzyme';
import React from 'react';
import Weconnect from '../../store';
import { MemoryRouter } from 'react-router-dom';
import mockSessionStorage from '../sessionStorage';
import decode from 'jwt-decode';
import jwt from "jsonwebtoken";
import BusinessesList from '../../components/business/businesses';


const loginUserMock = { token: jwt.sign({ user_email: "sonia@yahoo.com", user_password: "1234567890" }, "Oxa34KLncvfjKEjXkf")}

describe('BusinessesList component',() => {

    beforeEach(() => {
        Object.defineProperty(window, "sessionStorage", {
            value: mockSessionStorage
        });
        sessionStorage.setItem("access_token", loginUserMock.token);
    });

    it('should match snapshot',() =>{
        const wrapper = shallow(<BusinessesList/>)
        expect(wrapper).toMatchSnapshot();
    })

    it("should render the BusinessOne component", () => {
        const businessesComponent = mount(<MemoryRouter><BusinessesList store = {Weconnect}/></MemoryRouter>)
        expect(businessesComponent.length).toBe(1);
        
    });

    it('checks that the search form submits', ()=>{
        const businessesComponent = mount(<MemoryRouter><BusinessesList store = {Weconnect}/></MemoryRouter>)
        let q = businessesComponent.find('input[name="search_term"]')
        q.simulate('change', {target:{value: 'rrr'}});
        let category = businessesComponent.find('select[name="category"]')
        category.simulate('change', {target:{value: 'Telecommunications'}});
        let location = businessesComponent.find('select[name="location"]')
        location.simulate('change', {target:{value: "Kampala"}});
        businessesComponent.find('form.form-inline').simulate('submit');
    });
})
