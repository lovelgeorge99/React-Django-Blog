import React from 'react'
import { Navbar,Nav,Container, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import {logout} from '../actions/userActions'
import { useNavigate } from 'react-router-dom'



function Header() { 
  const userLogin=useSelector(state =>state.userLogin)

  const {userInfo}=userLogin

  const dispatch=useDispatch()
  const navigate=useNavigate()
  const logoutHandler=()=>{

    dispatch(logout())
    navigate('/')
  }
  return (
    <header>
    
    <Navbar collapseOnSelect expand="sm"   variant='dark'
       className="bg-dark justify-content-center">
     <Container>
       <LinkContainer to="/">
        <Navbar.Brand>
        Blogs
        </Navbar.Brand>
       </LinkContainer>

       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
       <Navbar.Collapse id="responsive-navbar-nav">
         <Nav className="mr-auto">
             <LinkContainer to="/">
               <Nav.Link>Home</Nav.Link>
             </LinkContainer>
             <LinkContainer to="/about">
               <Nav.Link>About</Nav.Link>
             </LinkContainer>
             <LinkContainer to="/contact" activeClassName='selectedMenuItem'>
               <Nav.Link>Contact</Nav.Link>
             </LinkContainer>

             {userInfo ? (
              <NavDropdown title={userInfo.name} id='username'>
                <LinkContainer to='/profile'>
                  <NavDropdown.Item>
                    Profile
                  </NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}> Logout</NavDropdown.Item>
              </NavDropdown>
             ):
             <LinkContainer to="/login" activeClassName='selectedMenuItem'>
             <Nav.Link>Login</Nav.Link>
           </LinkContainer>}

           {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminMenu'>
                <LinkContainer to='/admin/userlist'>
                  <NavDropdown.Item>
                    Users
                  </NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to='/admin/bloglist'>
                  <NavDropdown.Item>
                    Blog List
                  </NavDropdown.Item>
                </LinkContainer>
                 
              </NavDropdown>
        )}
         
             <Navbar.Text></Navbar.Text>
             <Navbar.Text>
               
             </Navbar.Text>
         </Nav>
       </Navbar.Collapse>
     </Container>
 </Navbar>
  </header>
  )
}

export default Header