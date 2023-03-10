import { createStore,combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { blogListReducer,blogContentReducer } from './reducers/blogReducers'


const reducer=combineReducers({
    blogList:blogListReducer,
    blogContents:blogContentReducer,

})
const initialState={
    
}

const middleware = [thunk]

const store=createStore(reducer,initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store