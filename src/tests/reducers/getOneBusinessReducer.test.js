import reducer from '../../reducers/getAOneBusinessReducer';
import { GET_ONE_BUSINESS, DELETE_BUSINESS, EDIT_BUSINESS, ADD_REVIEW, GET_REVIEWS } from '../../actions/types';

describe('one business Reducer', ()=>{
    let business;
    let review;
    let initialState;

    beforeEach(() => {
        business = { business_name: "MTN Uganda", business_profile: "Telecomm company in Uganda", 
                    location: "Kampala", category: "Telecommunications", id: 1 };
        review = { review_title: "Average Services", review_msg: "Their customer services are average" };
        initialState = {
            getBusinessMessage:{},
            deleteBusinessMessage: {},
            editBusinessMessage: {},
            addReviewMessage: {},
            getReviewsMessage: {}
        };

      });

    it("has initial state", () => {
        expect(reducer(undefined, {})).toEqual({ getBusinessMessage:{}, deleteBusinessMessage: {},
                            editBusinessMessage: {}, addReviewMessage: {}, getReviewsMessage: {} });
    });  
        
    it("should handle GET_ONE_BUSINESS ", () => {
        expect(
            reducer(initialState, {
            type: GET_ONE_BUSINESS,
            payload: business
            })
        ).toEqual({
            getBusinessMessage: business, deleteBusinessMessage: {},
            editBusinessMessage: {}, addReviewMessage: {}, getReviewsMessage: {}
        });
    });

    it("should handle DELETE_BUSINESS ", () => {
        expect(
            reducer(initialState, {
            type: DELETE_BUSINESS,
            payload: business
            })
        ).toEqual({
            getBusinessMessage: {}, deleteBusinessMessage: business,
            editBusinessMessage: {}, addReviewMessage: {}, getReviewsMessage: {}
        });
    });

    it("should handle EDIT_BUSINESS ", () => {
        expect(
            reducer(initialState, {
            type: EDIT_BUSINESS,
            payload: business
            })
        ).toEqual({
            getBusinessMessage: {}, deleteBusinessMessage: {},
            editBusinessMessage: business, addReviewMessage: {}, getReviewsMessage: {}
        });
    });

    it("should handle ADD_REVIEW ", () => {
        expect(
            reducer(initialState, {
            type: ADD_REVIEW,
            payload: review
            })
        ).toEqual({
            getBusinessMessage: {}, deleteBusinessMessage: {},
            editBusinessMessage: {}, addReviewMessage: review, getReviewsMessage: {}
        });
    });

    it("should handle GET_REVIEWS ", () => {
        expect(
            reducer(initialState, {
            type: GET_REVIEWS,
            payload: review
            })
        ).toEqual({
            getBusinessMessage: {}, deleteBusinessMessage: {},
            editBusinessMessage: {}, addReviewMessage: {}, getReviewsMessage: review
        });
    });
});    