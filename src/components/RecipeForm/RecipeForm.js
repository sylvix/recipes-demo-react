import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import {CATEGORIES} from "../../constants";

class RecipeForm extends Component {
  constructor(props) {
    super(props);

    this.state = props.recipe ? props.recipe : {
      title: '',
      text: '',
      category: CATEGORIES[0]
    };
  }

  inputChangeHandler = e => this.setState({[e.target.name]: e.target.value});

  formSubmitHandler = e => {
    e.preventDefault();
    this.props.onSubmit({...this.state});
  };

  render() {
    return (
      <Form onSubmit={this.formSubmitHandler}>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input type="text" name="title" id="title" placeholder="Enter dish title" value={this.state.title} onChange={this.inputChangeHandler} />
        </FormGroup>
        <FormGroup>
          <Label for="text">Recipe text</Label>
          <Input type="textarea" name="text" id="text" placeholder="Enter recipe" value={this.state.text} onChange={this.inputChangeHandler} />
        </FormGroup>
        <FormGroup>
          <Label for="category">Select category</Label>
          <Input type="select" name="category" id="category" value={this.state.category} onChange={this.inputChangeHandler}>
            {CATEGORIES.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </Input>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default RecipeForm;