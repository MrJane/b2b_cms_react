import React,{Component} from 'react'
import { Link ,NavLink} from 'react-router-dom'
class SideNav extends Component{
    render(){
        return(
            <div>
                <div className="navbar-default navbar-side">
                    <div className="sidebar-collapse">
                        <ul className="nav" id="main-menu">
                            <li>
                                <NavLink exact activeClassName="active-menu" to="/">
                                    <i className="fa fa-dashboard"></i>
                                    <span>首页</span>
                                </NavLink>
                            </li>
                            <li className="active">
                                <Link to="/product">
                                    <i className="fa fa-sitemap"></i>
                                    <span className="fa arrow"></span>
                                    <span>商品</span>
                                </Link>
                                <ul className="nav nav-second-level collapse in">
                                    <li>
                                        <NavLink to="/product" activeClassName="active-menu">商品管理</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/product.category" activeClassName="active-menu">品类管理</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="active">
                                <Link to="/">
                                    <i className="fa fa-sitemap"></i>
                                    <span className="fa arrow"></span>
                                    <span>订单</span>
                                </Link>
                                <ul className="nav nav-second-level collapse in">
                                    <li>
                                        <Link to="/" >订单管理</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="active">
                                <Link to="/">
                                    <i className="fa fa-sitemap"></i>
                                    <span className="fa arrow"></span>
                                    <span>用户</span>
                                </Link>
                                <ul className="nav nav-second-level collapse in">
                                    <li>
                                        <Link to="/" >用户管理</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="empty.html"><i className="fa fa-fw fa-file"></i> Empty Page</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default SideNav