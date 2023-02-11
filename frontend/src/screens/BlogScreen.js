import React,{useState,useEffect} from 'react'
import { Link,useParams } from 'react-router-dom'; 

import {Image,Row,Col,Button} from 'react-bootstrap'

import blogs from '../blogs'
import CodeBlock from '../components/CodeBlock'
import SectionBlock from '../components/SectionBlock';

import axios from 'axios'



function BlogScreen() {
  const { id } = useParams();
  // const blog = blogs.find((b)=> b._id == id)
  // console.log(blog);
  // const nestedObject = blog['content'];
  // console.log(nestedObject)


  const [blog,setBlog]=useState([])
  const [blogContent,setBlogContent]=useState([])

  useEffect(()=>{

    async function fetchBlog(){
      const{data}= await axios.get(`/api/blog/${id}`);
      console.log(data)
      setBlog(data)
      setBlogContent( data['content'])
      
    }
    fetchBlog()
    
  },[])
 

  
  
  
  return (
    <div className='py-4 mx-5 justify-center'>
        <Row>
          
          <Col> <h1>{blog.title}</h1></Col>
          <Col lg={4}>

          </Col>
        </Row>
       
        <Image fluid='false' src={blog.image} alt={blog.title} />

        {/* {blogContent.map(content =>(
            <SectionBlock  {...Object.keys(content).reduce((acc, key) => ({...acc, [key]: content[key]}), {})} />
           
            
      ))} */}

{blogContent.map(content =>(
  <SectionBlock key={content.id} {...Object.keys(content).reduce((acc, key) => ({...acc, [key]: content[key]}), {})} />
))}

        
        
    </div>
  )
}

export default BlogScreen


