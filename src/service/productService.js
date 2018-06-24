/**
 * @author MrJane
 * @date 2018/6/19
 * @Description:
 */
import Util from '../util/index'

const _util = new Util();

class Product {
    //获取用户列表
    getProductList(listParam) {
        let url = '',
            data = {};
        if (listParam.listType === 'list') {
            url = '/manage/product/list.do';
            data.pageNum = listParam.pageNum
        } else if (listParam.listType === 'search') {
            url = '/manage/product/search.do';
            data.pageNum = listParam.pageNum;
            data[listParam.searchType] = listParam.keyword
        }
        console.log("type", data)
        return _util.request({
            type: 'post',
            url: url,
            data: data
        });
    }


    setProductStatus(ProductInfo) {
        return _util.request({
            type: 'post',
            url: '/manage/product/set_sale_status.do',
            data: ProductInfo
        });
    }

    getCategoryList(parentCategoryId) {
        return _util.request({
            type: 'post',
            url: '/manage/category/get_category.do',
            data: {
                categoryId: parentCategoryId || 0
            }
        });
    }

}

export default Product