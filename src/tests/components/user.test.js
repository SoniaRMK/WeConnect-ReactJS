import React from 'react';
import {shallow, mount} from 'enzyme';
import { MemoryRouter } from 'react-router-dom'
import User from '../../components/user/user';
import Weconnect from '../../store';

describe('user component',() => {
    let wrapper;

    beforeEach(() => {
        wrapper =  shallow(<User/>)
      });

    it('should match snapshot',() =>{
        expect(wrapper).toMatchSnapshot();
    })

    it("should render the user register form", () => {
        const userComponent = mount(<MemoryRouter><User store = {Weconnect}/></MemoryRouter>)
        expect(userComponent.find("form.userRegister").length).toBe(1);
      });
    
    it("should render the user login form", () => {
        const userComponent = mount(<MemoryRouter><User store = {Weconnect}/></MemoryRouter>)
        expect(userComponent.find("form.userLogin").length).toBe(1);
    });

    // it('checks that the user register form validates', ()=>{
    //     const userComponent = mount(<MemoryRouter><User store = {Weconnect}/></MemoryRouter>)
    //     let user_name = userComponent.find('input[name="userNameReg"]')
    //     user_name.simulate('submit', {target:{elements:{name: "userNameReg", value: ''}}});
    //     let user_email = userComponent.find('input[name="emailReg"]')
    //     user_email.simulate('submit', {target:{elements:{emailReg:{value: ''}}}});
    //     let user_password = userComponent.find('input[name="psswdReg"]')
    //     user_password.simulate('submit', {target:{elements:{psswdReg:{value: ''}}}});
    //     let confirm_password = userComponent.find('input[name="psswd1Reg"]')
    //     confirm_password.simulate('submit', {target:{elements:{psswd1Reg:{value: ''}}}});
    //     expect(errors.user_email).toBe("This field is required");
    //     expect(errors.user_name).toBe("This field is required");
    //     expect(errors.user_password).toBe("This field is required");
    //     expect(errors.confirm_password).toBe("This field is required");
    // });

    it('checks that the user register form submits', ()=>{
        const userComponent = mount(<MemoryRouter><User store = {Weconnect}/></MemoryRouter>)
        let user_name = userComponent.find('input[name="userNameReg"]')
        user_name.simulate('change', {target:{value:'mary'}});
        let user_email = userComponent.find('input[name="emailReg"]')
        user_email.simulate('change', {target:{value: 'soniqueq@g.com'}});
        let user_password = userComponent.find('input[name="psswdReg"]')
        user_password.simulate('change', {target:{value: 'qwertyuiop'}});
        let confirm_password = userComponent.find('input[name="psswd1Reg"]')
        confirm_password.simulate('change', {target:{value: 'qwertyuiop'}});
        userComponent.find('form.userRegister').simulate('submit');
    });

    it('checks that the user login form submits', ()=>{
        const userComponent = mount(<MemoryRouter><User store = {Weconnect}/></MemoryRouter>)
        let user_email = userComponent.find('input[name="email"]')
        user_email.simulate('change', {target:{value: 'soniqueq@g.com'}});
        let user_password = userComponent.find('input[name="password"]')
        user_password.simulate('change', {target:{value: 'qwertyuiop'}});
        userComponent.find('form.userLogin').simulate('submit');
    });


})
