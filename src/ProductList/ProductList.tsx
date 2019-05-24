import React from 'react';
import './ProductList.css';
import { ProductItem } from '../Models/ProductItem';
import Product from '../Product/Product';
import { ProductsService } from '../ProductsService';

/*type ProductListProps = {
    products: ProductItem[];
}*/

interface ProductListProps {
    products: ProductItem[]
}
interface State {
    products: ProductItem[]
}

class ProductList extends React.Component <any,State> {
    private productsService = new ProductsService();

    constructor(props: ProductListProps) {
        super(props);
        this.state = { products: this.productsService.getProducts()};
    }

    componentDidMount() {

    }

    getProductList() {
        const products = this.state.products;

        let productList = (
            <div className="products">
                {products.map((pr,index) => {
                    return <Product key={pr.id} product={pr}/>;
                })}
            </div>
        );
        return productList;
    }

    render() {
        return (
            <div>
                <h1>Temp Category</h1>
                {this.getProductList()}
            </div>
        );
    }
}

export default ProductList;
