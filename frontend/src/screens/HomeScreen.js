import React ,{useEffect,useState}from 'react'
import Post from '../components/Post' 
import axios from 'axios'

import {Row,Col} from 'react-bootstrap'

function HomeScreen() {
  const [blogs,setBlogs]=useState([])

  useEffect(()=>{

    async function fetchBlogs(){
      const{data}= await axios.get('/api/blogs');
      setBlogs(data)
      // console.log("data")
    }
    fetchBlogs()
    
  },[])
  return (
    <div>   
        {blogs.map(blog =>(
            <Post key={blog._id} blog={blog} />
        ))}
      
    </div>
  )
}

export default HomeScreen