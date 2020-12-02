// Gallery with all Catcards
import React, { Component } from "react";
import CatCard from"../catCard/CatCard.js";
import "./CatGallery.css";

class CatGallery extends Component {
  render() {
    return (
      <div className="gallery">
        {this.props.catsDatas.map(cat => 
          <CatCard key={cat.id} name={cat.name} picturePath={cat.picturePath} idCat={cat.id}/>
        )}
      </div>
    );
  }
}
  
export default CatGallery;