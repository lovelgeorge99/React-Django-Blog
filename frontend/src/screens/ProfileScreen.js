import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector} from 'react-redux'

import { Link,useParams,useNavigate } from 'react-router-dom'
import {Form,Butoon,Row,Col, Button} from 'react-bootstrap'
import Loader from '../components/Loader' 
import Message from '../components/Message' 

import {getUserDetails,updateUserProfile} from '../actions/userActions'
import {USER_UPDATE_PROFILE_RESET} from '../constants/userConstants'


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

    const userUpdateProfile = useSelector(state=>state.userUpdateProfile)
    const {success}=userUpdateProfile


    useEffect(()=>{
      if(!user){
        navigate('/login')
        console.log("fsf")
      }
      else{
        if(!user || !user.name || success){
            dispatch({type:USER_UPDATE_PROFILE_RESET})
            dispatch(getUserDetails('profile'))
            
        }
        else{
            // setName(userInfo.name)
            // setEmail(userInfo.email)
            setName(user.name)
            setEmail(user.email)
        }
      }
    },[dispatch,navigate,userInfo,user,success])

    const submitHandler=(e)=>{
      e.preventDefault()
      if(password!=confirmPassword){
        setMessage('Password Do Not Match');
      }
      else{
        dispatch(updateUserProfile({
          'id':user._id,
          'name':name,
          'email':email,
          'password':password
        
        }))
        setMessage('Updated');
       console.log("updating")
      }
      
    }


  return (
    <Row>
        <Col md={3}>
            <h2>User Profile</h2>

            {message && <Message variant='success'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>


      <Form.Group controlId='name'>
          <Form.Label>Name </Form.Label>
          <Form.Control
            required  
            type='name'
            placeholder='Enter your name'
            value={name}
            onChange={(e)=>setName(e.target.value)}
          >

          </Form.Control>
        </Form.Group>

      <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            required  
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          >

          </Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          >

          </Form.Control>
        </Form.Group>


        <Form.Group controlId='passwordConfirm'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            
            type='password'
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
          >

          </Form.Control>
        </Form.Group>

        <Form.Group controlId='update'>
        <Button type='submit' variant='primary'>
          Update
         </Button>
         </Form.Group>

        

      </Form>
            
        </Col>
    </Row>
  )
}

export default ProfileScreen