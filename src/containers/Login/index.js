/**
 * @author MrJane
 * @date 2018/6/18
 * @Description:
*/
import React, {Component} from 'react'
import User from '../../service/userService'
import Util from '../../util'
import './style.css'

const _user = new User();
const _util = new Util();

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            redirect: _util.getUrlParam('redirect') || '/'
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    // onPasswordChange(e) {
    //     console.log(e.target.value)
    //     this.setState = ({
    //         password:e.target.value
    //     })
    // }

    //参数多了可以用这个事件
    onInputChange(e) {
        let inputValue = e.target.value, inputName = e.target.name;
        this.setState({
            [inputName]: inputValue
        })
    }

    //提交事件
    onSubmit(e) {
        let loginInfo = {
                username: this.state.userName,
                password: this.state.password
            },
            checkResult = _user.checkLoginInfo(loginInfo);
        if (checkResult.status) {
            _user.Login(loginInfo).then((res) => {
                _util.setStorage('userInfo', res)
                this.props.history.push(this.state.redirect)
            }, (errMsg) => {
                _util.errorTips(errMsg)
            });
        } else {
            _util.errorTips(checkResult.msg)
        }
    }

    render() {
        return (
            <div className="col-md-3 col-md-offset-5">
                <div className="panel panel-default login-pannel">
                    <div className="panel-heading"> 欢迎登陆—MALL管理系统</div>
                    <div className="panel-body">

                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">用户名</label>
                            <input type="text" className="form-control" id="exampleInputEmail1"
                                   name="userName" placeholder="" onChange={e => this.onInputChange(e)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">密码</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"
                                   name="password" placeholder="" onChange={e => this.onInputChange(e)}/>
                        </div>
                        <button onClick={this.onSubmit} className="btn btn-primary btn-lg btn-block">登陆</button>

                    </div>
                </div>
            </div>

        )
    }
}

export default Login