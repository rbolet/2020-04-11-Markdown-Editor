import './Output.css';
import React from 'react';
import Card from 'react-bootstrap/Card';
// import Form from 'react-bootstrap/Form';

const showdown = require('showdown');
const converter = new showdown.Converter({simpleLineBreaks: true});

export default function Output(props) {
  return (
    <div className="col-6">
      <Card className="bg-dark text-light ma-100">
        <Card.Body className="output-body">
          <div className="markdown form-control"
          dangerouslySetInnerHTML={generateMarkdown(props.output)}/>
        </Card.Body>
        <Card.Footer>Result</Card.Footer>
      </Card>

    </div>
  )
}

function generateMarkdown(text){
  return { __html: converter.makeHtml(text)}
}
