import axios from 'axios'
import {
    BLOG_LIST_REQUEST,
    BLOG_LIST_SUCCESS,
    BLOG_LIST_FAIL,

    BLOG_CONTENT_REQUEST,
    BLOG_CONTENT_SUCCESS,
    BLOG_CONTENT_FAIL,

} from '../constants/blogConstants'


export const listBlogs= () => async (dispatch) =>{
    try{
        
        dispatch({type:BLOG_LIST_REQUEST})

        const{data}= await axios.get('/api/blogs');

        dispatch({
            type:BLOG_LIST_SUCCESS,
            payload:data
        })

    }catch(error){
        dispatch({
            type:BLOG_LIST_FAIL,
            payload:error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        })
    }
}



export const listBlogContents = (slug) => async (dispatch) =>{
    try{
        
        dispatch({type:BLOG_CONTENT_REQUEST})

        const{data}= await axios.get(`/api/blog/${slug}`);

        dispatch({
            type:BLOG_CONTENT_SUCCESS,
            payload:data
        })

    }catch(error){
        dispatch({
            type:BLOG_CONTENT_FAIL,
            payload:error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        })
    }
}