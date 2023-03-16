import React from 'react'
import {Row,Col} from 'react-bootstrap'



//getting the code and about code prop from the SectioBlock and displaying it
function CodeBlock({code,about_code}) {
  return (
    <div>
        <Row>
            <Col lg={6}>
            
            <pre className='bg-dark text-white rounded p-3 '>
            {code}
            </pre>
            </Col>
            <p className='fs-6'>
            
              </p>
              {!about_code ? <br /> : <p>{about_code}</p>}
          </Row>
    </div>
  )
}

export default CodeBlock