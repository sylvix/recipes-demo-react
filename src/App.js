import React, {Fragment} from 'react';
import {Container} from "reactstrap";
import Navigation from "./components/UI/Navigation/Navigation";
import {Route, Switch} from "react-router-dom";
import Recipes from "./containers/Recipes";
import NewRecipe from "./containers/NewRecipe";
import SingleRecipe from "./containers/SingleRecipe";
import EditRecipe from "./containers/EditRecipe";

function App() {
  return (
    <Fragment>
      <Navigation/>
      <Container className="mt-3">
        <Switch>
          <Route path="/" exact component={Recipes}/>
          <Route path="/categories/:name" component={Recipes}/>
          <Route path="/recipes/new" component={NewRecipe} />
          <Route path="/recipes/:id" exact component={SingleRecipe} />
          <Route path="/recipes/:id/edit" component={EditRecipe} />
          <Route render={() => <h1>Not found</h1>} />
        </Switch>
      </Container>
    </Fragment>
  );
}

export default App;
