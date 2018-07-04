import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import decode from 'jwt-decode';
import jwt from "jsonwebtoken";
import * as actions from '../../actions/userActions';
import fetchMock from 'fetch-mock';
import { SIGN_USER, LOGIN_USER, LOGOUT_USER, RESET_PASSWORD } from '../../actions/types';
import mockSessionStorage from '../sessionStorage'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({ data: {} });
const signUpdata = { user_name: "Sonia Karungi", user_email: "sonia@yahoo.com",
                    user_password: "1234567890" };
const loginData = { user_email: "sonia@yahoo.com", user_password: "1234567890" };
const resetPasswordData = { user_email: "sonia@yahoo.com", user_password: "qwertyuiop" };
const resetPasswordMock = { user_email: "sonia@yahoo.com", user_password: "qwertyuiop" };
const registerUserMock = { id: 1, user_name: "Sonia Karungi", 
                           user_email: "sonia@yahoo.com", user_password: "1234567890" };
const loginUserMock = { token: jwt.sign({ user_email: "sonia@yahoo.com", user_password: "1234567890" }, "Oxa34KLncvfjKEjXkf") 
                        };

describe("user actions", () => {
    let calledActions;
    beforeEach(() => {
        Object.defineProperty(window, "sessionStorage", {
            value: mockSessionStorage
        });
        store.clearActions();
        calledActions = store.getActions();
    });
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
        })
    
    it('creates SIGN_USER action after successfully registering a user', () => {
        fetchMock.postOnce('/api/v2/auth/register',
        { body: signUpdata, headers: { 'Content-Type': 'application/json' }})
        const expectedActions = [
            { 
                type: SIGN_USER,
                payload: registerUserMock 
            }
            ];
        return store.dispatch(actions.signUp(signUpdata));
        expect(calledActions).toEqual(expectedActions);
    })

    it('does not create SIGN_USER action if no user data is provided', () => {
        fetchMock.postOnce('/api/v2/auth/register',
        { body: {}, headers: { 'Content-Type': 'application/json' }})
        const expectedActions = [
            { 
                type: SIGN_USER,
                payload: {} 
            }
            ];
        return store.dispatch(actions.signUp());
        expect(calledActions).toEqual(expectedActions);
    })

    it('creates LOGIN_USER action after successfully logging in a user', () => {
        fetchMock.postOnce('/api/v2/auth/login',
        { body: loginData, headers: { 'Content-Type': 'application/json' }})
        const expectedActions = [
            { 
                type: LOGIN_USER,
                payload: loginUserMock 
            }
            ];
        return store.dispatch(actions.logIn(loginData));
        expect(calledActions).toEqual(expectedActions);
    })

    it('does not create LOGIN_USER action if no user data is provided', () => {
        fetchMock.postOnce('/api/v2/auth/login',
        { body: {}, headers: { 'Content-Type': 'application/json' }})
        const expectedActions = [
            { 
                type: LOGIN_USER,
                payload: {} 
            }
            ];
        return store.dispatch(actions.logIn());
        expect(calledActions).toEqual(expectedActions);
    })

    it('creates LOGOUT_USER action after successfully logging out a user', () => {
        sessionStorage.setItem("access_token", loginUserMock.token);
        fetchMock.postOnce('/api/v2/auth/logout',
        { headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("access_token"), 
                                      'Content-Type': 'application/json' }})
        const expectedActions = [
            { 
                type: LOGOUT_USER,
                payload: loginUserMock.token
            }
            ];
        return store.dispatch(actions.logOut());
        expect(calledActions).toEqual(expectedActions);
    })

    it('creates RESET_PASSWORD action after a user successfully resets their  password', () => {
        sessionStorage.setItem("access_token", loginUserMock.token);
        fetchMock.postOnce('/api/v2/auth/reset-password',
        { body: resetPasswordData, headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("access_token"), 
                                      'Content-Type': 'application/json' }})
        const expectedActions = [
            { 
                type: RESET_PASSWORD,
                payload: resetPasswordMock
            }
            ];
        return store.dispatch(actions.resetPassword(resetPasswordData))
        expect(calledActions).toEqual(expectedActions);
    })

    it('does not create RESET_PASSWORD action if no user data is provided', () => {
        sessionStorage.setItem("access_token", loginUserMock.token);
        fetchMock.postOnce('/api/v2/auth/reset-password',
        { body: {}, headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("access_token"), 
                                      'Content-Type': 'application/json' }})
        const expectedActions = [
            { 
                type: RESET_PASSWORD,
                payload: {}
            }
            ];
        return store.dispatch(actions.resetPassword())
        expect(calledActions).toEqual(expectedActions);
    })

})