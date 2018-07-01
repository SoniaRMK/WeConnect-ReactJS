import reducer from '../../reducers/getAllBusinessesReducer';
import { GET_ALL_BUSINESSES } from '../../actions/types';

describe('one business Reducer', ()=>{
    let business;
    let initialState;

    beforeEach(() => {
        business = { business_name: "MTN Uganda", business_profile: "Telecomm company in Uganda", 
                    location: "Kampala", category: "Telecommunications"};
        initialState = { getBusinessesMessage:{} };

      });

    it("has initial state", () => {
        expect(reducer(undefined, {})).toEqual({ getBusinessesMessage:{} });
    });  
        
    it("should handle REGISTER_BUSINESS ", () => {
        expect(
            reducer(initialState, {
            type: GET_ALL_BUSINESSES,
            payload: business
            })
        ).toEqual({ getBusinessesMessage: business });
    });
});    