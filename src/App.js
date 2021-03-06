import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom'
import './App.css';
//导入组件
import Layout       from './component/Layout'
import Home         from './containers/Home'
import Login        from './containers/Login'
import Error        from './containers/Error'
import UserList     from './containers/UserList'
import ProductList  from './containers/Product/product'
import Category     from './containers/Product/category'
import ProdcutSave  from './containers/Product/productSave'

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/" render={() => (
                        <Layout>
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route path="/product/index" component={ProductList}/>
                                <Route path="/product/save" component={ProdcutSave}/>
                                <Route path="/product/category" component={Category}/>
                                <Redirect from="/product" to="/product/index"/>
                                <Route path="/user/index" component={UserList}/>
                                <Route exact from="/user" to="/user/index" component={UserList}/>
                                <Route path="/order" component={Home}/>
                                <Route component={Error}/>
                            </Switch>
                        </Layout>
                    )}/>

                </Switch>
            </Router>
        );
    }
}

export default App;
