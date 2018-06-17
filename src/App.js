import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Linkk, Redirect, Switch} from 'react-router-dom'
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
                        <Redirect from="*" to="/"/>
                    </Switch>
                </Layout>


            </Router>
        );
    }
}

export default App;
