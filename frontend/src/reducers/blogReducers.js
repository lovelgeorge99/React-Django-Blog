import {
    BLOG_LIST_REQUEST,
    BLOG_LIST_SUCCESS,
    BLOG_LIST_FAIL,

    BLOG_CONTENT_REQUEST,
    BLOG_CONTENT_SUCCESS,
    BLOG_CONTENT_FAIL,


} from '../constants/blogConstants'


export const blogListReducer = (state={blogs:[]},action)=>{
    
    switch(action.type){
        case BLOG_LIST_REQUEST:
            return {loading:true,blogs:[]}
        
        case BLOG_LIST_SUCCESS:
            return {loading:false,blogs:action.payload}
        
        case BLOG_LIST_FAIL:
            return {loading:false,error:action.payload}

        default:
            return state
            
        
    }
}




export const blogContentReducer = (state={blog:[]},action)=>{
    switch(action.type){
        case BLOG_CONTENT_REQUEST:
            return {loading:true,...state}
        
        case BLOG_CONTENT_SUCCESS:
            return {loading:false,blog:action.payload}
        
        case BLOG_CONTENT_FAIL:
            return {loading:false,error:action.payload}

        default:
            return state
            
        
    }
}