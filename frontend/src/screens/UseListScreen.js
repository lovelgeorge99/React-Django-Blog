import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector} from 'react-redux'

import { LinkContainer } from 'react-router-bootstrap'
import {Table,Butoon,Row,Col, Button} from 'react-bootstrap'
import Loader from '../components/Loader' 
import Message from '../components/Message' 

import {listUsers} from '../actions/userActions'


function UseListScreen() {
    const dispatch = useDispatch();
    const userList=useSelector(state=>state.userList)
    
    const {loading,error,users}=userList;

    useEffect(()=>{
        dispatch(listUsers())
    },[dispatch])
  return (
    <div>
       
           <h1>Users</h1>
            {loading
            ? (<Loader/>)
            : error
            ? (<Message variant='danger'>{error}</Message>)
            :(
                <Table striped bordered hover responsive className='table-sm'>
                    <thead>   
                        <th>ID</th>
                        <th>Name</th>
                        <th>EMAIL</th> 
                        <th>ADMIN</th>
                        
                    </thead>
                    <tbody>
                        {users.map(user =>(
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user._id}</td>
                                <td>{user._id}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )
    }
        
    </div>
  )
}

export default UseListScreen