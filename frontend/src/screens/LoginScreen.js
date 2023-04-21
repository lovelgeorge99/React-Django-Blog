import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector} from 'react-redux'

import { Link,useParams,useNavigate } from 'react-router-dom'
import {Form,Buttoon,Row,Col, Button} from 'react-bootstrap'
import Loader from '../components/Loader' 
import Message from '../components/Message' 

import {login} from '../actions/userActions'

import FormContainer from '../components/FormContainer'

function LoginScreen() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    

    const navigate=useNavigate()
    const redirect=navigate.search ? navigate.search.split('=')[1]: '/'
    console.log(redirect)
    const userLogin = useSelector(state=>state.userLogin)
    const {error,loading,userInfo}=userLogin

    const dispatch=useDispatch()

    useEffect(()=>{
      if(userInfo){
        navigate(redirect)
      }
    },[navigate,userInfo,redirect])
    const submitHandler=(e)=>{
      e.preventDefault()
      dispatch(login(email,password))
    }

  return (
    <FormContainer>
      <h1>Sign In</h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
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

        <Button type='submit' variant='primary'>
          Sign In
        </Button>

        <Row className='py-3'>
        <Col>
        New User ? <Link
          to={redirect ? `/register?redirect=${redirect}`: '/register'}>
          {/* to={'/register'}>  */}
          Register
        </Link>
        </Col>
        </Row>
      </Form>
      </FormContainer>
  )
}

export default LoginScreen