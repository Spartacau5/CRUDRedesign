import {FETCH_POST, NEW_POST} from '../actions/Types'
import {userData} from '../../Data.js'



const initialState = {
    items: [
        {
            id: 123,
            userType: "userType",
            fullName: "name",
            userName: "differentsyntax",
            email:"email@email.com",
            useSystem: "useSystem",
            password: "password$$",
            confirmPassword: "password$$",
            userGroup: "userGroup1",
            inviteUser: "inviteUser2",
        },
        {
            id: 345,
            userType: "userType",
            fullName: "fullName",
            userName: "userName",
            email:"email",
            useSystem: "useSystem",
            password: "password",
            confirmPassword: "confirmPassword",
            userGroup: "userGroup",
            inviteUser: "inviteUser",
        },
        {
            id: 554,
            userType: "userType",
            fullName: "fullName",
            userName: "userName",
            email:"email",
            useSystem: "useSystem",
            password: "password",
            confirmPassword: "confirmPassword",
            userGroup: "userGroup",
            inviteUser: "inviteUser",
        }
    ],
    item: {}
}

export default function(state = initialState, action) {
    // console.log(initialState.item)
    switch(action.type){
        case FETCH_POST:
            return {
                ...state,
                items: action.payload
            }
        case NEW_POST:
            initialState.items.push(action.payload);
            userData.push(action.payload)
            return {
                ...state,
                item: action.payload
            };

        default:
            return state
    }

}

export {
    initialState
};