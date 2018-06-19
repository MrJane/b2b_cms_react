/**
 * @author MrJane
 * @date 2018/6/18
 * @Description:
 */
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PageTitle from '../../component/PageTitle';
import Pagination from 'rc-pagination';
import 'rc-pagination/dist/rc-pagination.css'

import User from '../../service/userService'
import Util from '../../util'
const _user = new User();
const _util = new Util();
class UserList extends Component {
    constructor(props){
        super(props);
        this.state={
            list:[],
            pageNum : 1
        }
        this.loadUserList=this.loadUserList.bind(this)
        // this.onPageNumChange=this.onPageNumChange.bind(this)
    }

    render() {
        return (
            <div id="page-wrapper">
                <PageTitle title="用户列表"/>
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-striped table-bordered">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>用户名</th>
                                <th>邮箱</th>
                                <th>电话</th>
                                <th>注册时间</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.list.map(function (user,index) {
                                    return(
                                        <tr key={index}>
                                            <td>{ user.id}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                            <td>{user.createTime}</td>
                                        </tr>
                                    )
                                })
                            }

                            </tbody>
                        </table>
                    </div>
                    <Pagination current={this.state.pageNum} total={this.state.total} onChange={(pageNum)=>this.onPageNumChange(pageNum)} showQuickJumper hideOnSinglePage></Pagination>
                </div>

            </div>
        )
    }

    componentDidMount() {
        this.loadUserList();
    }
    onPageNumChange(pageNum){
        this.setState({
            pageNum:pageNum
        },function () {
            this.loadUserList();
        })
    }
    loadUserList() {
        _user.getUserList(this.state.pageNum).then(res=>{
            this.setState(res);
            console.log(this.state)
        },errMsg=>{
            _util.errorTips(errMsg)
        });
    }
}

export default UserList