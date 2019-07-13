import React from 'react';
import { ProductsService } from './ProductsService';
import './App.css';
import { ProductItem } from './Models/ProductItem';
import Product from './Product/Product';
import ProductList from './ProductList/ProductList';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import ProductPage from './ProductPage/ProductPage';
import ShoppingCart from './ShoppingCart/ShoppingCart'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import HomePage from './HomePage/HomePage';
import { ShoppingCart as SCT } from './Models/ShoppingCart';
import PropTypes from 'prop-types';
import SignInPage from './SignInPage/SignInPage';

interface ProductPageProps {
    productId: String
}
interface State {
    sct: SCT,
    productToShow: ProductItem,
    submitted: boolean
}

class App extends React.Component <any,State> {
    private productsService = new ProductsService();
    private tempProduct: ProductItem = { title: 'temp', price: 50, id: 1, brand: 'tempbrand'};

    constructor(props: ProductPageProps) {
        super(props);
        this.state = {
            sct: this.productsService.getShoppingcart(),
            productToShow: this.tempProduct,
            submitted: false
        };
        //this.updateSct = this.updateSct.bind(this);
    }

    /*updateSct() {
        //this.setState({ sct: this.productsService.getShoppingcart() });
        this.state = { sct: this.productsService.getShoppingcart() };
        console.log("sct in App updated");
        console.log(this.state.sct);
    }*/

    onShowProductPage = (product: ProductItem) => {
        this.setState({
            productToShow: product,
            submitted: true
        });
    }
    updateShoppingCartState = (shoppingcart: SCT) => {
        this.setState({ sct: shoppingcart });
    }

    onAddProductToCart = (product: ProductItem) => {
        this.productsService.addItemToShoppingcart(product);
        this.updateShoppingCartState(this.productsService.getShoppingcart());
    }

    render() {
        const tempProduct: ProductItem = { title: 'temp', price: 50, id: 1, brand: 'tempbrand'};
        let redirectToProductPage = null;
        /*if(this.state.submitted)
            redirectToProductPage = <Redirect to="/details" />;*/
        return (
            <BrowserRouter>
                <div className="App">
                    <header>
                    <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light">
                        <a className="navbar-brand" href="#">E-Commerce site</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                            <Link to={'/home'} className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link to={'/bla'} className="nav-link">ProductList</Link>
                            </li>
                            <li className="nav-item">
                            <Link to={'/shoppingcart'} className="nav-link">Shoppingcart</Link>
                            </li>
                            <li className="nav-item">
                            <Link to={'/details'} className="nav-link">Product page</Link>
                            </li>
                            <li className="nav-item">
                            <Link to={'/sign-in'} className="nav-link">Sign In</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item">Action</a>
                                <a className="dropdown-item">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                        </ul>

                        <a className="navbar-brand" href="#">
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                            <span className="navbar-text space">My Cart</span>
                        </a>
                        
                        
                        <form className="form-inline mt-2 mt-md-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"></input>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                        </div>
                    </nav>
                    </header>

                    <div className="App-body">
                        
                    {/*<img src="https://ak.p2.mango.com/mangoapp/images/CATKIDS052019CBA/kids_cba_0519_1.jpg?ts=111146&imformat=generic&imwidth=1920&imdensity=1"></img>*/}
                    
                    <Switch>
                        <Route path="/home" exact component={HomePage}></Route>
                        <Route path="/bla" exact component={() => <ProductList onMoreDetails={this.onShowProductPage}></ProductList>}/>
                        <Route path="/details" exact component={() => <ProductPage product={this.state.productToShow} addToCart={this.onAddProductToCart}></ProductPage>}/>
                        {/*BEST<Route path="/details/:id" exact component={() => <ProductPage product={this.state.productToShow} addToCart={this.onAddProductToCart}></ProductPage>}/>*/}
                        <Route path="/shoppingcart" exact component={() => <ShoppingCart shoppingcart={this.state.sct} items={this.state.sct.items}></ShoppingCart>}/>
                        <Route path="/sign-in" exact component={SignInPage}></Route>

                    </Switch>
                    </div>
                </div>
                </BrowserRouter>
        );
    }
    }
  
  export default App;
  