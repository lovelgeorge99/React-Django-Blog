import React from 'react'
import { Spinner } from 'react-bootstrap'

function Loader() {
  return (
   <Spinner
        animation='border'
        role='status'
        style={{
            height:'100px',
            width:'100px',
            marginTop:'50px',
            margin:'auto',
            display:'block'
        }}
   >
    
   </Spinner>
  )
}

export default Loader