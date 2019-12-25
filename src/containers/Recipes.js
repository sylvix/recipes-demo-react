import React, {Component} from 'react';
import axiosApi from "../axios-api";
import {Button, Card, CardBody, CardTitle, Col, Nav, NavItem, NavLink, Row} from "reactstrap";
import {Link, NavLink as RouterNavLink} from "react-router-dom";
import {CATEGORIES} from "../constants";

class Recipes extends Component {
  state = {
    recipes: []
  };

  requestData = async () => {
    let url = '/recipes.json';

    if (this.props.match.params.name) {
      url += `?orderBy="category"&equalTo="${this.props.match.params.name}"`
    }

    const response = await axiosApi.get(url);

    if (response.data) {
      this.setState({recipes: response.data});
    }
  };

  async componentDidMount() {
    this.requestData();
  }

  deleteRecipe = async (id) => {
    if (window.confirm('Do you want to delete this recipe?')) {
      await axiosApi.delete('/recipes/' + id + '.json');
      this.requestData();
    }
  };

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.name !== this.props.match.params.name) {
      return this.requestData();
    }
  }

  render() {
    return (
      <Row>
        <Col xs={3}>
          <Nav vertical pills>
            <NavItem>
              <NavLink tag={RouterNavLink} to="/" exact>All</NavLink>
            </NavItem>
            {CATEGORIES.map(c => (
              <NavItem key={c}>
                <NavLink tag={RouterNavLink} to={'/categories/' + c}>{c}</NavLink>
              </NavItem>
            ))}
          </Nav>
        </Col>
        <Col xs={9}>
          {Object.keys(this.state.recipes).map(id => (
            <Card key={id} className="mb-3">
              <CardBody>
                <CardTitle>{this.state.recipes[id].title}</CardTitle>
                <Button tag={Link} to={"/recipes/" + id}>View recipe</Button>{' '}
                <Button tag={Link} to={"/recipes/" + id + '/edit'} color="warning">Edit</Button>{' '}
                <Button onClick={() => this.deleteRecipe(id)} color="danger">Delete</Button>
              </CardBody>
            </Card>
          ))}
        </Col>
      </Row>
    );
  }
}

export default Recipes;