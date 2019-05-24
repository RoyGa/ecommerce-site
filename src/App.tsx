import React from 'react';
import './App.css';
import { ProductItem } from './Models/ProductItem';
import Product from './Product/Product';
import ProductList from './ProductList/ProductList';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import ProductPage from './ProductPage/ProductPage';
import ShoppingCart from './ShoppingCart/ShoppingCart'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import HomePage from './HomePage/HomePage';

const App: React.FC = () => {

  function getProducts() {
    let products: ProductItem[];
    products = [
      {brand: 'nike', price: 30, title: 'Shirt', id: 1},
      {brand: 'nike', price: 25.91, title: 'T-Shirt', id: 2},
      {brand: 'nike', price: 20, title: 'Model Shirt', id: 3},
      {brand: 'nike', price: 20, title: 'shirt', id: 4},
      {brand: 'nike', price: 28, title: 'shirt', id: 5},
      {brand: 'nike', price: 250, title: 'shirt', id: 6},
      {brand: 'nike', price: 20, title: 'shirt', id: 7}
  ]
    return products;
  }

  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light">
            <a className="navbar-brand" href="#">E-Commerce site</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
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
              
                
                
               
                
              </ul>

              <a className="navbar-brand" href="#">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                <span className="navbar-text space">
                 My Cart
                </span>
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
            {/*<ProductList products={getProducts()}/>*/}
            <Route path="/home" exact component={HomePage}></Route>
            <Route path="/bla" exact component={ProductList}/>
            <Route path="/details/:id" exact component={ProductPage}/>
            <Route path="/shoppingcart" exact component={ShoppingCart}/>
          </Switch>
          
          {/*<Route exact path="/details/:id" render={({match}) => <ProductPage productId={match.params.id} {...match} /> } />*/}
        </div>
    </div>
    </BrowserRouter>
   
  );
}
/*<Route path="/:id" exact component={ProductPage}/>*/
export default App;
