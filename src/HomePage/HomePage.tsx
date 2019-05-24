import React from 'react';
import { ProductItem } from '../Models/ProductItem';
import { string } from 'prop-types';
import { ProductsService } from '../ProductsService';

interface HomePageProps {};
interface State {
    productId: number,
    productToShow?: ProductItem
}

class HomePage extends React.Component <any,State> {
    private productsService = new ProductsService();

    constructor(props: HomePageProps) {
        super(props);
    }
   
    render() {
        return (
        <div className="product-page-root">
            <h1>HomePage</h1>
        </div>
        );
    }
    }
  
  export default HomePage;
  