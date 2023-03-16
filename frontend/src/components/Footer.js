import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

function Footer() {
  return (
    
        <footer style={{position:'sticky',bottom:'0',width:'100%'}}className='bg-dark'>
            <Container>
              <Row>
                <Col className='text-center text-light py-3'>Copyright &copy; <a target="_blank" href="https://lovelgeorge.ml">Lovel George</a></Col>
              </Row>
            </Container>

        </footer>
    
  )
}

export default Footer