import React from 'react';
import './Product.css';
import { ProductItem } from '../Models/ProductItem';
import { Link, Redirect } from 'react-router-dom';

type ProductProps = {
    /*title: String;
    brand: String;
    price: number;*/
    product: ProductItem;
}
const Product = (props: ProductProps) => {
  let redirectToProductPage = null;
  const productPageUrl: string = "/" + props.product.id;
  let productStyle = {
    width: "5 rem"
  }
  return (
      <div className="card" style={productStyle}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Blue_Tshirt.jpg"  className="card-img-top"></img>
        <div className="card-body">
          <h5 className="card-title">{props.product.title}</h5>
          <p className="card-text"><small className="text-muted">{props.product.brand}</small></p>
          <p className="card-text">{props.product.price} USD</p>
          <a href="#" className="btn btn-primary"><Link to={'/' + props.product.id}>More Details >></Link></a>
         
        </div>
      </div>
  );
}

export default Product;
