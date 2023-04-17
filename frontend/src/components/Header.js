import React from 'react'
import { Navbar,Nav,Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'



function Header() {
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
             <LinkContainer to="/login" activeClassName='selectedMenuItem'>
               <Nav.Link>Login</Nav.Link>
             </LinkContainer>
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