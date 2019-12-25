import React, {Component} from 'react';
import axiosApi from "../axios-api";
import RecipeForm from "../components/RecipeForm/RecipeForm";

class NewRecipe extends Component {
  formSubmitHandler = async (recipeData) => {
    await axiosApi.post('/recipes.json', recipeData);
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h1>New recipe</h1>
        <RecipeForm
          onSubmit={this.formSubmitHandler}
        />
      </div>
    );
  }
}

export default NewRecipe;