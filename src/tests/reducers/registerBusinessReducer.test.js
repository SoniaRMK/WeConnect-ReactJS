import reducer from '../../reducers/registerBusinessReducer';
import { REGISTER_BUSINESS } from '../../actions/types';

describe('one business Reducer', ()=>{
    let business;
    let initialState;

    beforeEach(() => {
        business = { business_name: "MTN Uganda", business_profile: "Telecomm company in Uganda", 
                    location: "Kampala", category: "Telecommunications"};
        initialState = { registerBusinessMessage:{} };

      });

    it("has initial state", () => {
        expect(reducer(undefined, {})).toEqual({ registerBusinessMessage:{} });
    });  
        
    it("should handle REGISTER_BUSINESS ", () => {
        expect(
            reducer(initialState, {
            type: REGISTER_BUSINESS,
            payload: business
            })
        ).toEqual({ registerBusinessMessage: business });
    });
});    