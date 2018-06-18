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

class UserList extends Component {
    render() {
        return (
            <div id="page-wrapper">
                <PageTitle title="用户列表"/>
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-striped table-bordered">
                            <thead>
                            <tr>
                                <th>你好</th>
                                <th>你好</th>
                                <th>你好</th>
                                <th>你好</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>好啊</td>
                                <td>好啊</td>
                                <td>好啊</td>
                                <td>好啊</td>
                            </tr>
                            <tr>
                                <td>好啊</td>
                                <td>好啊</td>
                                <td>好啊</td>
                                <td>好啊</td>
                            </tr>
                            <tr>
                                <td>好啊</td>
                                <td>好啊</td>
                                <td>好啊</td>
                                <td>好啊</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <Pagination current={1} total={10}></Pagination>
                </div>

            </div>
        )
    }
}

export default UserList