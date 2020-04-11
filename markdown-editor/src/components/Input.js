import './Input.css';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Input(props){

  return (
    <div className="col-6">
      <Card className="bg-dark text-light">
        <Card.Body className="input-body">
          <Form>
            <Form.Control className="input-textarea"
             as="textarea" value={props.input} onChange={(event)=>{props.handleChange(event.target.value)}}/>
          </Form>
        </Card.Body>
        <Card.Footer>
          <Button onClick={props.handleClick}>Mark This Down</Button>
        </Card.Footer>
      </Card>

    </div>
  )
}
