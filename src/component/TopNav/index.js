import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Util from '../../util'
import User from '../../service/userService'

const _util = new Util();
const _user = new User()

class TopNav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: _util.getStorage('userInfo').username || ''
        }
        this.onLogout = this.onLogout.bind(this)
    }

    onLogout(e) {
        _user.logout().then(res => {
            _util.removeStorage('userInfo');
            window.location.href='/login'
        }, errMsg => {
            _util.errorTips(errMsg)
        });
    }

    render() {
        return (
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
                                {
                                    this.state.username ? <span>欢迎，{this.state.username}</span> : <span>欢迎您！</span>
                                }
                                <i className="fa fa-caret-down"></i>
                            </a>
                            <ul className="dropdown-menu dropdown-user">
                                <li>
                                    <a onClick={e=>this.onLogout(e)}><i className="fa fa-sign-out fa-fw"></i> Logout</a>
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