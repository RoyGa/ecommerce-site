import React from 'react';
import './ProductPage.css';
import { ProductItem } from '../Models/ProductItem';
import { string } from 'prop-types';
import { ProductsService } from '../ProductsService';

/*interface ProductPageProps {
    productId: String,
    updateAppSct: Function
}*/
interface ProductPageProps {
    product: ProductItem,
    addToCart: Function
}
interface State {
    //productId: number,
    productToShow?: ProductItem
}

class ProductPage extends React.Component <ProductPageProps,State> {
    private productsService = new ProductsService();

    constructor(props: ProductPageProps) {
        super(props);
        this.state = { productToShow: props.product };
    }

    componentDidMount() {
    }

    getProductToShow(productId: number): ProductItem {
       return this.productsService.getProductById(productId);
    }
    
    getIdToShow(): JSX.Element | null {
        return this.state.productToShow ? <div className="product-title">Product {this.state.productToShow.id}</div> : null;
    }

    getPriceToShow(): JSX.Element | null {
        return this.state.productToShow ? <div className="product-price">${this.state.productToShow.price}</div> : null;
    }

    getBrandToShow(): JSX.Element | null {
        return this.state.productToShow ? <div className="product-brand">{this.state.productToShow.brand}</div> : null;
    }

    render() {
        return (
        <div className="product-page-root">
            <div className="product-container">
               
                <div className="product-images">
                    <div className="product-big-image-container">
                    </div>
                    <div className="product-small-images">
                    </div>
                </div>
                <div className="product-details">
                    {this.getBrandToShow()}
                    {this.getIdToShow()}
                    {this.getPriceToShow()}
                    <div className="size-label">SIZE:</div>
                    <div className="select-container">
                        <select>
                            <option value="" disabled selected>Select size</option>
                            <option value="1">XS</option>
                            <option value="2">S</option>
                            <option value="3">M</option>
                            <option value="4">L</option>
                        </select>
                    </div>
                    <div className="add-to-cart-button" onClick={() => this.props.addToCart(this.state.productToShow)}><h1>ADD TO CART</h1></div>
                </div>
            </div>
            
        </div>
        );
    }
    }
  
  export default ProductPage;
  