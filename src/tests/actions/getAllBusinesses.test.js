import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import decode from 'jwt-decode';
import jwt from "jsonwebtoken";
import * as actions from '../../actions/getAllBusinessesActions';
import fetchMock from 'fetch-mock';
import { GET_ALL_BUSINESSES } from '../../actions/types';
import mockSessionStorage from '../sessionStorage';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({ data: {} });
const businessDataMock = { business_name: "MTN Uganda", business_profile: "Telecomm company in Uganda", 
                       location: "Kampala", category: "Telecommunications"};
const loginData = { user_email: "sonia@yahoo.com", user_password: "1234567890" };
const loginUserMock = { token: jwt.sign({ user_email: "sonia@yahoo.com", user_password: "1234567890" }, "Oxa34KLncvfjKEjXkf") 
                        };

describe("get all businesses actions", () => {
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
    
    it('creates GET_ALL_BUSINESSES action after successfully getting businesses', () => {
        let q = ""; let location = ""; let category = ""; let page = 1;
        sessionStorage.setItem("access_token", loginUserMock.token);
        fetchMock.getOnce(`/api/v2/businesses?q=${q}&location=${location}&category=${category}&page=${page}`,
        { body: {}, headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("access_token"), 
                                      'Content-Type': 'application/json' }})
        const expectedActions = [
            { 
                type: GET_ALL_BUSINESSES,
                payload: businessDataMock
            }
            ];
        return store.dispatch(actions.getBusinesses(q, location, category, page));
        expect(calledActions).toEqual(expectedActions);
    })
  
    it('creates GET_ALL_BUSINESSES action even without parameters provided', () => {
        let q = ""; let location = ""; let category = ""; let page = 1;
        sessionStorage.setItem("access_token", loginUserMock.token);
        fetchMock.getOnce(`/api/v2/businesses?q=${q}&location=${location}&category=${category}&page=${page}`,
        { body: {}, headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("access_token"), 
                                      'Content-Type': 'application/json' }})
        const expectedActions = [
            { 
                type: GET_ALL_BUSINESSES,
                payload: {}
            }
            ];
        return store.dispatch(actions.getBusinesses());
        expect(calledActions).toEqual(expectedActions);
    })

})