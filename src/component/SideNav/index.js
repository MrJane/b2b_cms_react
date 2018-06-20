/**
 * @author MrJane
 * @date 2018/6/18
 * @Description:
*/
import React,{Component}    from 'react'
import { Link ,NavLink}     from 'react-router-dom'
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
                                <Link to="/product/index">
                                    <i className="fa fa-list"></i>
                                    <span className="fa arrow"></span>
                                    <span>商品</span>
                                </Link>
                                <ul className="nav nav-second-level collapse in">
                                    <li>
                                        <NavLink to="/product/index" activeClassName="active-menu">商品管理</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/product/category" activeClassName="active-menu">品类管理</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="active">
                                <Link to="/order">
                                    <i className="fa fa-check-square-o"></i>
                                    <span className="fa arrow"></span>
                                    <span>订单</span>
                                </Link>
                                <ul className="nav nav-second-level collapse in">
                                    <li>
                                        <NavLink to="/order" activeClassName="active-menu" >订单管理</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="active">
                                <Link to="/user">
                                    <i className="fa fa-user-o"></i>
                                    <span className="fa arrow"></span>
                                    <span>用户</span>
                                </Link>
                                <ul className="nav nav-second-level collapse in">
                                    <li>
                                        <NavLink to="/user" activeClassName="active-menu">用户管理</NavLink>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default SideNav