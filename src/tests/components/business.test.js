import {shallow, mount} from 'enzyme';
import React from 'react';
import Weconnect from '../../store';
import { MemoryRouter } from 'react-router-dom';
import mockSessionStorage from '../sessionStorage';
import decode from 'jwt-decode';
import jwt from "jsonwebtoken";
import BusinessOne from '../../components/business/business';


const loginUserMock = { token: jwt.sign({ user_email: "sonia@yahoo.com", user_password: "1234567890" }, "Oxa34KLncvfjKEjXkf")}

describe('BusinessOne component',() => {

    beforeEach(() => {
        Object.defineProperty(window, "sessionStorage", {
            value: mockSessionStorage
        });
        sessionStorage.setItem("access_token", loginUserMock.token);
    });

    it('should match snapshot',() =>{
        const wrapper = shallow(<BusinessOne/>)
        expect(wrapper).toMatchSnapshot();
    })

    it("should render the BusinessOne component", () => {
        const businessComponent = mount(<MemoryRouter><BusinessOne store = {Weconnect}/></MemoryRouter>)
        expect(businessComponent.length).toBe(1);
        
    });

    it('checks that the add review form submits', ()=>{
        const businessComponent = mount(<MemoryRouter><BusinessOne store = {Weconnect}/></MemoryRouter>)
        let review_title = businessComponent.find('input[name="reviewTitle"]')
        review_title.simulate('change', {target:{value: 'Lovely Staff'}});
        let review_msg = businessComponent.find('textarea[name="reviweMsg"]')
        review_msg.simulate('change', {target:{value: 'Very helpful staff'}});
        businessComponent.find('form.addReviewForm').simulate('submit');
    });

    it('checks that the delete form submits', ()=>{
        const businessComponent = mount(<MemoryRouter><BusinessOne store = {Weconnect}/></MemoryRouter>)
        businessComponent.find('form.deleteBusiness').simulate('submit');
    });
})
