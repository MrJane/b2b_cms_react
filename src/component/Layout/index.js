import React,{Component} from 'react'
//导入组件
import SideNav from '../SideNav'
import TopNav from '../TopNav'
import './style.css'
class Layout extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id="wrapper">
                <TopNav></TopNav>
                <SideNav></SideNav>
                {this.props.children}
            </div>
        )
    }
}
export default Layout