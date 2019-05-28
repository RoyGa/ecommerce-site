import React from 'react';
import './ShoppingCart.css';
import { ProductItem } from '../Models/ProductItem';
import { ShoppingCart as sct} from '../Models/ShoppingCart';
import { ProductsService } from '../ProductsService';

/*type ProductListProps = {
    products: ProductItem[];
}*/

interface ShoppingCartProps {
    shoppingcart: sct,
    items: ProductItem[]
}
interface State {
    shoppingcart: sct,
    items: ProductItem[]
}

class ShoppingCart extends React.Component <ShoppingCartProps,State> {
    private productsService = new ProductsService();

    constructor(props: ShoppingCartProps) {
        super(props);
        this.state = {
            shoppingcart: props.shoppingcart,
            items: props.items
        };
    }

    componentDidUpdate() {
        this.state = {
            shoppingcart: this.props.shoppingcart,
            items: this.props.items
        };
    }

    deleteItemFromCart(itemId: number) {
        this.productsService.deleteItemFromShoppingcart(itemId);
        const itemIndex: number = this.state.items.findIndex(i => {
            return i.id == itemId;
        });
        let newItems: ProductItem[] = [...this.state.items];
        newItems.splice(itemIndex,1);
        this.setState({
            items: newItems
        });
    }

    getProducts(): ProductItem[] | null {
        return this.state.items ? this.state.items : null;
    }

    getProductList() {
        const products =  this.getProducts();
        let style1 = {
            paddingTop: "5px"
        };

        if(products == null) return;
        let productList = (
            <div className="temp">
                {products.map((pr,index) => {
                    return (
                        <div className="temp">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-2 text-center">
                                    <img src="http://placehold.it/120x80" width={120} height={80}></img>
                                </div>
                                <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
                                    <h4 className="product-name"><strong>{pr.title}</strong></h4>
                                    <h4>
                                        <small>{pr.brand}</small>
                                    </h4>
                                </div>
                                <div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
                                    <div className="col-3 col-sm-3 col-md-6 text-md-right" style={style1}>
                                        <h6><strong>{pr.price}$ <span className="text-muted">x</span></strong></h6>
                                    </div>
                                    <div className="col-4 col-sm-4 col-md-4">
                                        <div className="quantity">
                                            <input type="button" value="+" className="plus"></input>
                                            <input type="number" step="1" max="99" min="1" value="1" title="Qty" className="qty" size={4}></input>
                                            <input type="button" value="-" className="minus"></input>
                                        </div>
                                    </div>
                                    <div className="col-2 col-sm-2 col-md-2 text-right">
                                        <button type="button" className="btn btn-outline-danger btn-xs" onClick={()=> this.deleteItemFromCart(pr.id)}>
                                            <i className="fa fa-trash" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <hr></hr>
                        </div>
                    );
                })}
            </div>
        );
        return productList;
    }

    render() {
        let style1 = { margin: "5px" };
        let style2 = { margin: "10px" };
        return (
            <div className="container">
                <div className="card shopping-cart">
                    <div className="card-header bg-light text-dark">
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        &nbsp; Shopping cart
                        <a href="" className="btn btn-outline-info btn-sm pull-right">Continue shopping</a>
                        <div className="clearfix"></div>
                    </div>
                    <div className="card-body">
                        {this.getProductList()}
                        <div className="pull-right">
                            <a href="" className="btn btn-outline-secondary pull-right">
                                Update shopping cart
                            </a>
                        </div>
                    </div>
                    
                    <div className="card-footer">
                        <div className="coupon col-md-5 col-sm-5 no-padding-left pull-left">
                            <div className="row">
                                <div className="col-6">
                                    <input type="text" className="form-control" placeholder="coupon code"></input>
                                </div>
                                <div className="col-6">
                                    <input type="submit" className="btn btn-secondary" value="Use coupon"></input>
                                </div>
                            </div>
                        </div>
                        <div className="pull-right" style={style2}>
                            <a href="" className="btn btn-success pull-right">Checkout</a>
                            <div className="pull-right" style={style1}>
                                Total price: <b>50.00$</b>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShoppingCart;
