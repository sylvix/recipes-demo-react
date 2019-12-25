import React, {Component} from 'react';
import axiosApi from "../axios-api";
import RecipeForm from "../components/RecipeForm/RecipeForm";

class EditRecipe extends Component {
  state = {
    recipe: null
  };

  getRecipeUrl = () => {
    const id = this.props.match.params.id;
    return '/recipes/' + id + '.json';
  };

  async componentDidMount() {
    const response = await axiosApi.get(this.getRecipeUrl());

    this.setState({recipe: response.data});
  }

  submitFormHandler = async (recipe) => {
    await axiosApi.put(this.getRecipeUrl(), recipe);
    this.props.history.push('/');
  };

  render() {
    return this.state.recipe && (
      <RecipeForm
        onSubmit={this.submitFormHandler}
        recipe={this.state.recipe}
      />
    );
  }
}

export default EditRecipe;