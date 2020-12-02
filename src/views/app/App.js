// Main app component
import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import "./App.css";
import GalleryPage from"../galleryPage/GalleryPage.js";
import CatDetailsPage from"../catDetailsPage/CatDetailsPage.js";
import API from "../../api/apiCats.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { cats: [] };
  }

  // Recup cats data from API
  componentDidMount() {
    API.catsDatas().then(data => { this.setState({ cats: data }) })
    .catch(error => { console.log(error)})
  }

  render() {
    const { cats } = this.state;
    return (
      <Router>
        <Switch>
            <Route path="/cats/:catId">
                <CatDetailsPage catsDatas={cats}/>
            </Route>
            <Route path="/">
                <GalleryPage catsDatas={cats}/>
            </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
