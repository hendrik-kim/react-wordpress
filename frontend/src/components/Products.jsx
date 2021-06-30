import React, { Component } from "react";
import ProductItem from "./ProductItem";
import axios from "axios";

export class Producs extends Component {
  state = {
    Producs: [],
    isLoaded: false,
  };

  componentDidMount() {
    axios
      .get("/wp-json/wp/v2/products")
      .then((res) =>
        this.setState({
          Producs: res.data,
          isLoaded: true,
        })
      )
      .catch((err) => console.log(err));
  }

  render() {
    const { Producs, isLoaded } = this.state;
    if (isLoaded) {
      return (
        <div>
          {Producs.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      );
    }
    return <h3>Loading...</h3>;
  }
}

export default Producs;
