import React from 'react'
import { Spinner } from 'react-bootstrap'


// spinner component to display when data is being  loaded
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