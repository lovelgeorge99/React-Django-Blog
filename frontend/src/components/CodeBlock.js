import React from 'react'
import {Row,Col} from 'react-bootstrap'

function CodeBlock({sub_heading,sub_content,code,about_code,imagez}) {
  return (
    <div>
        <Row>
            <Col lg={6}>
            {sub_heading}
            <pre className='bg-dark text-white rounded p-3 '>
            {code}
            </pre>
            </Col>
            <p className='fs-6'>
            {sub_content}
              </p>
              {!about_code ? <br /> : <p>{about_code}</p>}
          </Row>
    </div>
  )
}

export default CodeBlock