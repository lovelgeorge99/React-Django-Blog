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
        navigate('/login')
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

            {message && <Message variant='danger'>{message}</Message>}
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