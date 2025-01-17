// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" render={() => <ProductList categoryName="defaultCategory" />} />
                <Route path="/categories/:categoryName/products/:productId" component={ProductDetails} />
            </Switch>
        </Router>
    );
}

export default App;
