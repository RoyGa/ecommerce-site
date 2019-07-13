import React from 'react';
import './SignInPage.css';
import { ProductsService } from '../ProductsService';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FormControlProps } from 'react-bootstrap/FormControl';
import axios from 'axios';

interface ProductPageProps {
}
interface State {
   username: string,
   password: string
   //[name: string]: string;
}

class SignInPage extends React.Component <ProductPageProps,State> {
    private productsService = new ProductsService();

    constructor(props: ProductPageProps) {
        super(props);
        this.state = {
            username: "temp",
            password: "1234"
        };
    }

    handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        this.sendRequest()
    }
    handleUsernameChange = (event: React.FormEvent<FormControlProps>) => {
        if(event.currentTarget.value) {
            this.setState({ username: event.currentTarget.value });
        }
    }
    handlePasswordChange = (event: React.FormEvent<FormControlProps>) => {
        if(event.currentTarget.value) {
            this.setState({ password: event.currentTarget.value });
        }
    }

    /*sendRequest = () => {
        const { username, password } = this.state;
        console.log(username, password);
        //const createNewUserUrl = `user/new/?username=${username}&email=${username}&password=${password}`;
        const createNewUserUrl = `user/new/?username=bla&email=blabla&password=1234`;
        const baseUrl = 'http://localhost:4000/';
    axios({
      url: createNewUserUrl,
      baseURL: baseUrl,
      method: 'POST'
    })
      .then(res => res.data)
      .then(res => {
        if (
          res &&
          res.data > 0
        ) {
            console.log(res.data);
        }
      });
    }*/

    sendRequest = () => {
        axios.post('http://localhost:4000/user/new', {
              username: this.state.username,
              email: this.state.username,
              password: this.state.password,
              shoppingcart: []
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });  
    }


    render() {
        return (
        <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control onChange={this.handleUsernameChange}type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={this.handlePasswordChange}type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicChecbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <h1>{this.state.username}</h1>
            <h1>{this.state.password}</h1>
        </Form>
        );
    }
    }
  
  export default SignInPage;
  