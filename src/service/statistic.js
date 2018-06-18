/**
 * @author MrJane
 * @date 2018/6/18
 * @Description:
*/
import Util from '../util/index'
import $ from 'jquery'
const _util = new Util();

class Staistic {
    //用户登陆
    getHomeResult() {
        return _util.request({
            url: '/manage/statistic/base_count.do'
        });
    }
}

export default Staistic