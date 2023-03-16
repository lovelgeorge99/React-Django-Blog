import React ,{useEffect,useState}from 'react'
import Post from '../components/Post' 

import Loader from '../components/Loader' 
import Message from '../components/Message' 

import { useDispatch,useSelector} from 'react-redux'
import  {listBlogs}  from '../actions/blogActions'

import {Row,Col} from 'react-bootstrap'

function HomeScreen() {
  const dispatch=useDispatch()

  const blogList=useSelector(state => state.blogList)
  const {error,loading,blogs}=blogList


 
  console.log("home")
 // const [blogs,setBlogs]=useState([])
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