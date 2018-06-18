import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom'
import './App.css';
//导入组件
import Layout from './component/Layout'
import Home from './containers/Home'

class App extends Component {
    render() {
        return (
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/product" component={Home}/>
                        <Route path="/user" component={Home}/>
                        <Route path="/order" component={Home}/>
                    </Switch>
                </Layout>


            </Router>
        );
    }
}

export default App;
