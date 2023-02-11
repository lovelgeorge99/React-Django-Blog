import React from 'react'
import { Card } from 'react-bootstrap'
import { Link,useParams } from 'react-router-dom';   



function Post({ blog }) {
    const id=blog._id;
  return (
    <Card border="dark" className='m-4 bg-transparent'>
      <Card.Body>
        <Card.Title id="carTitle">
            <h2>{blog.title}</h2>
        </Card.Title>
        <Card.Text>
          
        </Card.Text>
        <Link to={`/post/${id}`} relative="id">
            <h5 className='btn btn-primary'>Read More</h5>
        </Link><br></br>
        <i className='fas fa-calendar-days'></i><span id='date'> Posted on 1 Jan 2023</span>
      </Card.Body>
    </Card>
  )
}

export default Post