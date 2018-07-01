import mainReducer from "../../reducers/index";
import reducer from '../../reducers/userReducer';
import { SIGN_USER, LOGIN_USER, LOGOUT_USER, RESET_PASSWORD } from '../../actions/types';

describe('user Reducer', ()=>{
    let signUpData;
    let loginData;
    let initialState;

    beforeEach(() => {
        signUpData = { user_name: "Sharifah", user_email: "sharifah@gmail.com", user_password: "qwertyuiop" };
        loginData = { user_name: "Sharifah", user_email: "sharifah@gmail.com", user_password: "qwertyuiop" };
        initialState = {
            signUpMessage:{},
            loggedInToken:{},
            loggedOutMessage: {},
            resetPasswordMessage:{}
        };
      });

      it("has initial state", () => {
        expect(reducer(undefined, {})).toEqual({ signUpMessage:{}, loggedInToken:{}, 
                                                 loggedOutMessage: {}, resetPasswordMessage:{} });
      });

      it("should handle SIGN_USER ", () => {
        expect(
          reducer(initialState, {
            type: SIGN_USER,
            payload: signUpData
          })
        ).toEqual({
            signUpMessage: signUpData, 
            loggedInToken:{}, loggedOutMessage: {}, resetPasswordMessage:{}
        });
      });

      it("should handle LOGIN_USER ", () => {
        expect(
          reducer(initialState, {
            type: LOGIN_USER,
            token: loginData
          })
        ).toEqual({
            loggedInToken: loginData, 
            signUpMessage:{}, loggedOutMessage: {}, resetPasswordMessage:{}
        });
      });

      it("should handle LOGOUT_USER ", () => {
        expect(
          reducer(initialState, {
            type: LOGOUT_USER,
            payload: {}
          })
        ).toEqual({
            loggedOutMessage: {}, 
            signUpMessage:{}, loggedInToken: {}, resetPasswordMessage:{}
        });
      });

      it("should handle RESET_PASSWORD ", () => {
        expect(
          reducer(initialState, {
            type: RESET_PASSWORD,
            payload: loginData
          })
        ).toEqual({
            resetPasswordMessage: loginData, 
            signUpMessage:{}, loggedOutMessage: {}, loggedInToken:{}
        });
      });

      it("should export combine reducer", () => {
        expect(mainReducer).toBeDefined();
      });
});