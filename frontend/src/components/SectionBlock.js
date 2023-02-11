import React from 'react'
import CodeBlock from './CodeBlock'
import {Row,Col,Image} from 'react-bootstrap'

function SectionBlock({sub_heading,sub_content,code,about_code,imagez}) {
  return (
    
    <div>
      {!sub_heading ? null :
              <Row>
                <hr></hr>
              <Col lg={6}>
              <h4 className='mt-4'>
              {sub_heading}
              </h4>
              </Col>
          </Row>
      }

      {!sub_content ? null:
              <Row>
              <p className='fs-6'>
              {sub_content}
              </p>
             
              </Row>
      }
      
      {!imagez ? null :

        <Image fluid='false' src={imagez} alt="dgfvd" />
      }
      
      {!code ? null : 
      <div>

        <p><CodeBlock code={code} about_code={about_code}/></p>
        </div>
      
      }
    
    </div>
  )
}

export default SectionBlock