import {Switch, Route} from 'react-router-dom';
import { Redirect } from 'react-router';
import React, {Component} from "react";
import axios from "axios";
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import jwtDecode from 'jwt-decode';




class App extends Component{
    state = {
        user: ''
    }

//Establishes what methods/functions will be ran when the page is launched
     componentDidMount() {
        const jwt = localStorage.getItem('token');
        try{
            const user = jwtDecode(jwt);
            this.setState({user});
        }catch{

        }
    }

    
// Establish url enpoints to get to a certain page vvv
render(){
    const user = this.state.user;
        return(
            <div className = "App">
            <NavBar className="navbar" user = {user}/>   
            <Switch>
                <Route
                path ='/home'
                render = {props => {
                    if (!user){
                        return <Redirect to ="/login"/>
                    }else{
                        return <Home {...props} user = {user} />
                    }
                }}
                />
                <Route path="/products" render={props => <ProductList {...props} user={this.state.user}/>}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/user_home" component={BuyerHome}/>
                <Route path="/productsform" component={ProductsForm}/>
                <Route path="/product_description" component={ProductDescription}/>
                <Route path="/shopping_cart" render={props => <ShoppingCart {...props} user={this.state.user}/>}/>
                <Route path="/checkout" component={CheckOut}/>
            </Switch>
        </div>
        )
    }
}
export default App;
