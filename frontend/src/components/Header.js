import React from 'react'
import { Navbar,Nav,Container, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import {logout} from '../actions/userActions'


function Header() { 
  const userLogin=useSelector(state =>state.userLogin)

  const {userInfo}=userLogin

  const dispatch=useDispatch()

  const logoutHandler=()=>{
    dispatch(logout())
  }
  return (
    <header>
    
    <Navbar collapseOnSelect expand="sm"   variant='dark'
       className="bg-dark justify-content-center">
     <Container>
       <LinkContainer to="/">
        <Navbar.Brand>
        Docs
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