// Page with cats' gallery
import React, { Component } from "react";
import "./GalleryPage.css";
import CatGallery from"../../components/catGallery/CatGallery.js";

class GalleryPage extends Component {
  render() {
    const catsDatas = this.props.catsDatas;
    return (
      <div className="galleryPage">
        <h1 id="title" >Cats gallery</h1>
        <CatGallery catsDatas={catsDatas}/>
      </div>
    );
  }
}

export default GalleryPage;
