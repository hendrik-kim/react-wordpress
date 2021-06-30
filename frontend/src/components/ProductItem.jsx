import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export class ProductItem extends Component {
  state = {
    imgUrl: "",
    author: "",
    isLoaded: false,
  };
  static propType = {
    product: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const { featured_media, author } = this.props.product;
    // const getImageUrl = axios.get(`/wp-json/wp/v2/media/${featured_media}`);
    const getAuthor = axios.get(`/wp-json/wp/v2/users/${author}`);

    Promise.all([getAuthor]).then((res) => console.log(res));
  }

  render() {
    const { title, excerpt } = this.props.product;
    return (
      <div>
        <h2>{title.rendered}</h2>
        <div dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
      </div>
    );
  }
}

export default ProductItem;
