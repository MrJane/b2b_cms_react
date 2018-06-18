/**
 * @author MrJane
 * @date 2018/6/18
 * @Description:
*/
import Util from '../util/index'
import $ from 'jquery'
const _util = new Util();

class User {
    //用户登陆
    Login(loginInfo) {
        return _util.request({
            type: 'post',
            url: '/manage/user/login.do',
            data: loginInfo
        });
    }

    //检查用户数据是不是合法
    checkLoginInfo(loginInfo) {
        let username = $.trim(loginInfo.username),
            password = $.trim(loginInfo.password);
        // 判断用户名为空
        if(typeof username !== 'string' || username.length ===0){
            return {
                status: false,
                msg: '用户名不能为空！'
            }
        }
        // 判断密码为空
        if(typeof password !== 'string' || password.length ===0){
            return {
                status: false,
                msg: '密码不能为空！'
            }
        }
        return {
            status : true,
            msg : '验证通过'
        }
    }

    // 退出登录
    logout(){
        return _util.request({
            type    : 'post',
            url     : '/user/logout.do'
        });
    }

    //获取用户列表
    getUserList(pageNum){
        return _util.request({
            type:'post',
            url :'/manage/user/list.do',
            data:{
                pageNum:pageNum
            }
        });
    }

}

export default User