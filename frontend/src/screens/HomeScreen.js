import React ,{useEffect,useState}from 'react'
import Post from '../components/Post' 
import axios from 'axios'
import Loader from '../components/Loader' 
import Message from '../components/Message' 

import { useDispatch,useSelector ,shallowEqual} from 'react-redux'
import  {listBlogs}  from '../actions/blogActions'

import {Row,Col} from 'react-bootstrap'

function HomeScreen() {
  const dispatch=useDispatch()

  const blogList=useSelector(state => state.blogList,shallowEqual)
  const {error,loading,blogs}=blogList


  // const [blogs,setBlogs]=useState([])
  console.log("home")
  useEffect(()=>{

    // async function fetchBlogs(){
    //   const{data}= await axios.get('/api/blogs');
    //   setBlogs(data)
    //   // console.log("data")
    // }
    // fetchBlogs()
    
    dispatch(listBlogs())
    
  },[dispatch])
  
  return (
    <div> 
      <h1>Latest Blogs</h1>
      {loading? <Loader />
      :error?<Message variant='danger'>{error}</Message>
        :
        <Row>
         {blogs.map(blog =>(
          <Post key={blog._id} blog={blog} />
          ))}
        </Row>
      }
      
        
      
    </div>
  )
}

export default HomeScreen