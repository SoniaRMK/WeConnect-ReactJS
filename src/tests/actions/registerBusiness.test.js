import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import decode from 'jwt-decode';
import jwt from "jsonwebtoken";
import * as actions from '../../actions/registerBusinessActions';
import fetchMock from 'fetch-mock';
import { REGISTER_BUSINESS } from '../../actions/types';
import mockSessionStorage from '../sessionStorage'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({ data: {} });
const businessDataMock = { business_name: "MTN Uganda", business_profile: "Telecomm company in Uganda", 
                       location: "Kampala", category: "Telecommunications", created_by: "Sonia", id: 1};
const businessData = { business_name: "MTN Uganda", business_profile: "Telecomm company in Uganda", 
                       location: "Kampala", category: "Telecommunications"};
const loginData = { user_email: "sonia@yahoo.com", user_password: "1234567890" };
const loginUserMock = { token: jwt.sign({ user_email: "sonia@yahoo.com", user_password: "1234567890" }, "Oxa34KLncvfjKEjXkf") 
                        };

describe("register a business actions", () => {
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
    
    it('creates REGISTER_BUSINESS action after successfully creating a business', () => {
        sessionStorage.setItem("access_token", loginUserMock.token);
        fetchMock.postOnce(`/api/v2/businesses`,
        { body: businessData, headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("access_token"), 
                                      'Content-Type': 'application/json' }})
        const expectedActions = [
            { 
                type: REGISTER_BUSINESS,
                payload: businessDataMock
            }
            ];
        return store.dispatch(actions.registerBusiness(businessData));
        expect(calledActions).toEqual(expectedActions);
    })

})