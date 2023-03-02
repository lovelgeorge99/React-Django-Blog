import React,{useState,useEffect,useCallback,useMemo} from 'react'
import { useParams } from 'react-router-dom'; 

import {Image,Row,Col} from 'react-bootstrap'

import SectionBlock from '../components/SectionBlock';

import axios from 'axios'
import Loader from '../components/Loader' 
import Message from '../components/Message'


import { useDispatch,useSelector } from 'react-redux'
import { listBlogContents } from '../actions/blogActions'

function BlogScreen() {
  const { slug } = useParams();
  console.log(slug)
  // const blog = blogs.find((b)=> b._id == id)
  // console.log(blog);
  // const nestedObject = blog['content'];
  // console.l og(nestedObject)
  
     

  // const [blog,setBlog]=useState([])
  // const [blogContent,setBlogContent]=useState([])

  // useEffect(()=>{

  //   async function fetchBlog(){


  //     const{data}= await axios.get(`/api/blog/${slug}`);

  //     // const{data}= await axios.get(`/api/test/${id}`);

      
  //     setBlog(data['header'])
  //    // console.log("here"+blog)
  //     // setBlogContent( data['content'])
  //     console.log(typeof(data['data']))
  //     setBlogContent(data['data'])
  //     console.log(data['header'])
      
  //   }
  //   fetchBlog()
    
  // },[slug])

    const dispatch = useDispatch()

    
    useEffect(()=>{
      console.log("Effect")
      dispatch(listBlogContents(slug))
    },[dispatch,slug])

    const blogContents=useSelector(state => state.blogContents)

    const {loading,error,blog}=blogContents
    
    console.log((blog.data))
    


    let blogContent = [];
    let header=[]
    if (blog && blog.data) {
    blogContent = blog.data;
    header=blog.header
    }
    
   
    

  
  
  
  return (
    <div className='py-4 mx-5 justify-center'>
        <Row>
          
          <Col> <h1>{header.title}</h1></Col>
          <Col lg={4}>

          </Col>
        </Row>
       
        <Image fluid='false' src={header.titleImage} alt="fsfsfsf" />

       


        {loading ? <Loader />  
        : error
            ? <Message variant='danger'>{error}</Message>
            :
            (
                <div>
                  {blogContent.map((content,index) =>(
          
          <SectionBlock  key={index} {...Object.keys(content).reduce((acc, key) => ({...acc, [key]: content[key]}), {})} />
        ))}
                  </div>
            )}
        
        




         

        
        
    </div>
  )
}

export default BlogScreen


