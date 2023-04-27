import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector} from 'react-redux'

import { Link,useParams,useNavigate } from 'react-router-dom'
import {Form,Buttoon,Row,Col, Button} from 'react-bootstrap'
import Loader from '../components/Loader' 
import Message from '../components/Message' 

import {getUserDetails} from '../actions/userActions'


function ProfileScreen() {

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const [message,setMessage]=useState('')

    
    const dispatch=useDispatch()

    const navigate=useNavigate()

    const userDetails = useSelector(state=>state.userDetails)
    const {error,loading,user}=userDetails

    const userLogin = useSelector(state=>state.userLogin)
    const {userInfo}=userLogin

   
    useEffect(()=>{
      if(!user){
        // navigate('/login')
        console.log("fsf")
      }
      else{
        if(!user || !user.name){
            dispatch(getUserDetails('profile'))
        }
        else{
            setName(user.name)
            setEmail(user.email)
        }
      }
    },[dispatch,navigate,userInfo,user])

    const submitHandler=(e)=>{
      e.preventDefault()
      if(password!=confirmPassword){
        setMessage('Password Do Not Match');
      }
      else{
       console.log("updateing")
      }
      
    }


  return (
    <Row>
        <Col md={3}>
            <h2>User Profile</h2>
            
        </Col>
    </Row>
  )
}

export default ProfileScreen