import React,{Component}    from 'react';
import { Link }             from 'react-router-dom'

class TopNav extends Component{
    onLogout(){
        console.log("提出")
    }
    render(){
        return(
            <div>
                <nav className="navbar navbar-default top-navbar">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse"
                                data-target=".sidebar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to="home"><b>In</b>sight</Link>
                    </div>

                    <ul className="nav navbar-top-links navbar-right">
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="" href="javscript:;">
                                <i className="fa fa-user fa-fw"></i>
                                <span>欢迎，MrJane</span>
                                <i className="fa fa-caret-down"></i>
                            </a>
                            <ul className="dropdown-menu dropdown-user">
                                <li>
                                    <a onClick={this.onLogout}><i className="fa fa-sign-out fa-fw"></i> Logout</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
export default TopNav