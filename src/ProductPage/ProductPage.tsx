import React from 'react';
import './ProductPage.css';
import { ProductItem } from '../Models/ProductItem';
import { string } from 'prop-types';
import { ProductsService } from '../ProductsService';

interface ProductPageProps {
    productId: String
}
interface State {
    productId: number,
    productToShow?: ProductItem
}

class ProductPage extends React.Component <any,State> {
    private productsService = new ProductsService();

    constructor(props: ProductPageProps) {
        super(props);
        this.state = { productId: this.props.match.params.id };
    }

    componentDidMount() {
        this.updateProductToShow();
    }

    componentDidUpdate() {
        if(this.state.productId != this.props.match.params.id) this.updateProductToShow();
    }

    updateProductToShow(): void {
        const product: ProductItem = this.getProductToShow(this.props.match.params.id);
        this.setState({
            productId: this.props.match.params.id,
            productToShow: product
        });
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
    addItemToCart() {
        this.productsService.addItemToShoppingcart(this.getProductToShow(this.props.match.params.id));
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
                            <option value="volvo">XS</option>
                            <option value="saab">S</option>
                            <option value="opel">M</option>
                            <option value="audi">L</option>
                        </select>
                    </div>
                    <div className="add-to-cart-button" onClick={()=> this.addItemToCart()}><h1>ADD TO CART</h1></div>
                </div>
            </div>
            
        </div>
        );
    }
    }
  
  export default ProductPage;
  