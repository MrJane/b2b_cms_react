import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom'
//导入组件

import ProducList     from './product'
class ProductRouter extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/product/index" component={ProducList}/>
                    <Redirect excat from="/index" to="/product/index" component={Login}/>
                    <Route path="/login" component={Login}/>
                </Switch>
            </Router>
        );
    }
}

export default ProductRouter;
