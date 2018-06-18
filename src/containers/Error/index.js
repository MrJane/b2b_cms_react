/**
 * @author MrJane
 * @date 2018/6/18
 * @Description:
*/
import React,{Component}        from 'react'
import { Link }                   from 'react-router-dom'
import PageTitle                from '../../component/PageTitle'
class Error extends Component{
    render(){
        return(
            <div id="page-wrapper">
                <PageTitle title="出错了"/>
                <div className="row">
                    <div className="col-md-12">
                        找不到该路径，<Link to="/">点我返回首页</Link>
                    </div>
                </div>

            </div>
        )
    }
}
export default Error