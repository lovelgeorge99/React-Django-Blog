import React from 'react'
import CodeBlock from './CodeBlock'
import {Row,Col,Image} from 'react-bootstrap'


// calling this from Blogscreen where each section has these 5 props
function SectionBlock({sub_heading,sub_content,code,about_code,image}) {

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
      
      {!image ? null :

          <div>
         <Image fluid='false' src={image} alt="dgfvd" />
         </div>
      }
      
      {!code ? null : 
      <div>

        <CodeBlock code={code} about_code={about_code}/>
        </div>
      
      }
    
    </div>
  )
}

export default SectionBlock