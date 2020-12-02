// Card of one cat
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./CatCard.css";

class CatCard extends Component {
  constructor(props) {
    super(props);
    this.goToCatsDetails = this.goToCatsDetails.bind(this);
  }

  goToCatsDetails(e) {
    this.props.history.push("/cats/" + this.props.idCat);
  }

  render() {
    return (
      <div className="card" onClick={this.goToCatsDetails}>
        <h2 id="catName">{this.props.name}</h2>
        <img id="catImg" src={this.props.picturePath} alt={this.props.name} />
      </div>
    );
  }
}
  
export default withRouter(CatCard);