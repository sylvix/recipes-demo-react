import React, {Component} from 'react';
import axiosApi from "../axios-api";
import {Button} from "reactstrap";

class SingleRecipe extends Component {
  state = {
    recipe: null
  };

  getCurrentRecipeLink = () => {
    const id = this.props.match.params.id;
    return '/recipes/' + id + '.json';
  };

  async componentDidMount() {
    const response = await axiosApi.get(this.getCurrentRecipeLink());
    this.setState({recipe: response.data});
  }

  deleteRecipe = async () => {
    await axiosApi.delete(this.getCurrentRecipeLink());
    this.props.history.replace('/');
  };

  render() {
    return this.state.recipe && (
      <div>
        <h1>{this.state.recipe.title}</h1>
        <p style={{fontVariant: 'italic'}}>Category: {this.state.recipe.category}</p>
        <p>
          {this.state.recipe.text}
        </p>
        <p>
          <Button color="danger" onClick={this.deleteRecipe}>Delete</Button>
        </p>
      </div>
    );
  }
}

export default SingleRecipe;