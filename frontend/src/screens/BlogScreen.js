import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'; 

import {Image,Row,Col} from 'react-bootstrap'


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
      // setBlogContent( data['content'])
      setBlogContent(data)
      
    }
    fetchBlog()
    
  },[id])
 

  
  
  
  return (
    <div className='py-4 mx-5 justify-center'>
        <Row>
          
          <Col> <h1>{id}</h1></Col>
          <Col lg={4}>

          </Col>
        </Row>
       
        <Image fluid='false' src={blog.image} alt="fsfsfsf" />

        {/* {blogContent.map(content =>(
            <SectionBlock  {...Object.keys(content).reduce((acc, key) => ({...acc, [key]: content[key]}), {})} />
           
            
      ))} */}

        {blogContent.map((content,index) =>(
          
          <SectionBlock  key={index} {...Object.keys(content).reduce((acc, key) => ({...acc, [key]: content[key]}), {})} />
        ))}

          {/* {blogContent.map(content =>(
          
          <SectionBlock key={content.key} {...Object.keys(content).reduce((acc, key) => ({...acc, [key]: content[key]}), {})} />
        ))}  */}

        
        
    </div>
  )
}

export default BlogScreen


