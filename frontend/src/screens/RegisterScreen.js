
import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector} from 'react-redux'

import { Link,useParams,useNavigate } from 'react-router-dom'
import {Form,Buttoon,Row,Col, Button} from 'react-bootstrap'
import Loader from '../components/Loader' 
import Message from '../components/Message' 

import {register} from '../actions/userActions'

import FormContainer from '../components/FormContainer'


function RegisterScreen() {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const [message,setMessage]=useState('')

    

    const navigate=useNavigate()

    const redirect=navigate.search ? navigate.search.split('=')[1]: '/'
    console.log(redirect)
    const userRegister = useSelector(state=>state.userRegister)
    const {error,loading,userInfo}=userRegister

    const dispatch=useDispatch()

    useEffect(()=>{
      if(userInfo){
        navigate(redirect)
      }
    },[navigate,userInfo,redirect])

    const submitHandler=(e)=>{
      e.preventDefault()
      if(password!=confirmPassword){
        setMessage('Password Do Not Match');
      }
      else{
        dispatch(register(name,email,password))
      }
      
    }

  return (
    <FormContainer>
      <h1>Sign In</h1>
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
            required
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
            required
            type='password'
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
          >

          </Form.Control>
        </Form.Group>


        <Button type='submit' variant='primary'>
          Register
         </Button>

         <Row className='py-3'>
        <Col>
       Already have account ? <Link
          to={redirect ? `/login?redirect=${redirect}`: '/login'}>
          {/* to={'/register'}>  */}
          Sign In
        </Link>
        </Col>
        </Row>

        

      </Form>
      
    </FormContainer>
  )
}

export default RegisterScreen