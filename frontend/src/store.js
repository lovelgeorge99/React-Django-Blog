import { createStore,combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { blogListReducer,blogContentReducer } from './reducers/blogReducers'
import { userLoginReducer,userRegisterReducer,userDetailsReducer,userUpdateProfileReducer ,userListReducer,userDeleteReducer } from './reducers/userReducers'


const reducer=combineReducers({
    blogList:blogListReducer,
    blogContents:blogContentReducer,
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    userDetails:userDetailsReducer,
    userUpdateProfile:userUpdateProfileReducer,
    userList:userListReducer,
    userDelete:userDeleteReducer,

})


const getUserInfoFromStorage=localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) :null

const initialState={
    userLogin:{userInfo:getUserInfoFromStorage}
   
}
const middleware = [thunk]

const store=createStore(reducer,initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store