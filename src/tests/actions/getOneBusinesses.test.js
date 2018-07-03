import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import decode from 'jwt-decode';
import jwt from "jsonwebtoken";
import * as actions from '../../actions/getOneBusinessActions';
import fetchMock from 'fetch-mock';
import { GET_ONE_BUSINESS, DELETE_BUSINESS, EDIT_BUSINESS, ADD_REVIEW, GET_REVIEWS } from '../../actions/types';
import mockSessionStorage from '../sessionStorage'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({ data: {} });
const reviewData = { review_title: "Average Services", review_msg: "Their customer services are average" };
const reviewDataMock = { review_title: "Average Services", review_msg: "Their customer services are average", id: 1 };
const businessData = { business_name: "MTN-Uganda", business_profile: "Telecomm company in Uganda", 
                       location: "Kampala", category: "Telecommunications"};
const businessDataMock = { business_name: "MTN-Uganda", business_profile: "Telecomm company in Uganda", 
                       location: "Kampala", category: "Telecommunications", id: 1};
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
    
    it('creates GET_ONE_BUSINESS action after successfully getting a business', () => {
        let bizId = businessDataMock.id;
        sessionStorage.setItem("access_token", loginUserMock.token);
        fetchMock.getOnce(`/api/v2/businesses/${bizId}`,
        { body: {}, headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("access_token"), 
                                      'Content-Type': 'application/json' }})
        const expectedActions = [
            { 
                type: GET_ONE_BUSINESS,
                payload: businessDataMock
            }
            ];
        return store.dispatch(actions.getBusiness(bizId));
        expect(calledActions).toEqual(expectedActions);
    })

    it('creates DELETE_BUSINESS action after successfully deleting a business', () => {
        let bizId = businessDataMock.id;
        sessionStorage.setItem("access_token", loginUserMock.token);
        fetchMock.deleteOnce(`/api/v2/businesses/${bizId}`,
        { body: {}, headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("access_token"), 
                                      'Content-Type': 'application/json' }})
        const expectedActions = [
            { 
                type: DELETE_BUSINESS,
                payload: businessDataMock,
                id: bizId
            }
            ];
        return store.dispatch(actions.deleteBusiness(bizId));
        expect(calledActions).toEqual(expectedActions);
    })

    it('creates EDIT_BUSINESS action after successfully editing a business', () => {
        let bizId = businessDataMock.id;
        sessionStorage.setItem("access_token", loginUserMock.token);
        fetchMock.putOnce(`/api/v2/businesses/${bizId}`,
        { body: businessData, headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("access_token"), 
                                      'Content-Type': 'application/json' }})
        const expectedActions = [
            { 
                type: EDIT_BUSINESS,
                payload: businessDataMock,
                id: bizId
            }
            ];
        return store.dispatch(actions.editBusiness(bizId));
        expect(calledActions).toEqual(expectedActions);
    })

    it('creates ADD_REVIEW action after successfully adding a review to a business', () => {
        let bizId = businessDataMock.id;
        sessionStorage.setItem("access_token", loginUserMock.token);
        fetchMock.postOnce(`/api/v2/businesses/${bizId}/reviews`,
        { body: reviewData, headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("access_token"), 
                                      'Content-Type': 'application/json' }})
        const expectedActions = [
            { 
                type: ADD_REVIEW,
                payload: reviewDataMock,
                id: bizId
            }
            ];
        return store.dispatch(actions.addReview(bizId, reviewData));
        expect(calledActions).toEqual(expectedActions);
    })

    it('creates GET_REVIEWS action after successfully getting all reviews for a business', () => {
        let bizId = businessDataMock.id;
        sessionStorage.setItem("access_token", loginUserMock.token);
        fetchMock.getOnce(`/api/v2/businesses/${bizId}/reviews`,
        { body: {}, headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem("access_token"), 
                                      'Content-Type': 'application/json' }})
        const expectedActions = [
            { 
                type: GET_REVIEWS,
                payload: reviewDataMock
            }
            ];
        return store.dispatch(actions.getReviews(bizId));
        expect(calledActions).toEqual(expectedActions);
    })

})