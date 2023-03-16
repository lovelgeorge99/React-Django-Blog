import React from 'react'
import { Alert } from 'react-bootstrap'


//Message component to display any particular message 
function Message({variant,children}) {
  return (
    <Alert variant={variant}> 
        {children}
    </Alert>
  )
}

export default Message