/* eslint-disable react/jsx-pascal-case */
import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import Alert from 'react-bootstrap/Alert'

import './App.css';
import './animate.min.css'

export class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       listItems: [],
       input_item: ""
    }
  }

  handleInputChange = (event) => {
    this.setState({
        input_item: event.target.value
    })
  }

  handleSubmit = (event) => {
    this.state.listItems.push(this.state.input_item)
    this.setState({
      input_item: ""
    })
  }

  render() {
    return (
      <div className="App">

        <List_Container>

          <div className="container item-container">
            {
              this.state.listItems.map(item => <List_item name={item}></List_item>)
            }
          </div>

        <div className="input-form">
          <InputGroup className="mb-3">
              <FormControl
                placeholder="Add new list item"
                value={this.state.input_item} 
                onChange={this.handleInputChange}
              />
              <InputGroup.Append>
                <Button onClick={this.handleSubmit}>Submit</Button>
              </InputGroup.Append>
            </InputGroup>
        </div>

        </List_Container>
                
      </div>
    )
  }
}

function List_Container(props) {
  return (
    <div className="list-container">
      <div>
        {props.children}
      </div>
    </div>
  );
}

function List_item(props) {

  return (
    <div className="list-item animate__animated animate__fadeIn">
      <Alert variant="info">{props.name}</Alert>
    </div>
    
  );
}

export default App;
