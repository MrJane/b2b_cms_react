/**
 * @author MrJane
 * @date 2018/6/19
 * @Description:
 */
import Util from '../util/index'
const _util = new Util();

class Product {
    //获取用户列表
    getProductList(pageNum){
        return _util.request({
            type:'post',
            url :'/manage/product/list.do',
            data:{
                pageNum:pageNum
            }
        });
    }

}

export default Product