import React, {Component} from 'react';
import PageTitle from '../../component/PageTitle'
import Pagination from 'rc-pagination'
import Product from '../../service/productService'
import Util from '../../util'

const _product = new Product();
const _util = new Util();

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            pageNum: 1,
            firstLoading: true
        }
        this.loadProductList = this.loadProductList.bind(this)
        // this.onPageNumChange=this.onPageNumChange.bind(this)
    }

    render() {
        let listBody = this.state.list.map(function (user, index) {
            return (
                <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.price}</td>
                    <td>{user.phone}</td>
                    <td>{new Date(user.createTime).toLocaleString()}</td>
                </tr>
            )
        });
        let listError = (
            <tr>
                <td colSpan="5" className="text-center">{this.state.firstLoading ? '正在加载数据中.....' : '没有找到相应的结果...'}</td>
            </tr>
        )
        return (
            <div id="page-wrapper">
                <PageTitle title="商品列表"/>
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-striped table-bordered">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>信息</th>
                                <th>价格</th>
                                <th>状态</th>
                                <th>操作</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.list.length >0 ? listBody : listError}
                            </tbody>
                        </table>
                    </div>
                    <Pagination current={this.state.pageNum} total={this.state.total}
                                onChange={(pageNum) => this.onPageNumChange(pageNum)} showQuickJumper
                                hideOnSinglePage></Pagination>
                </div>

            </div>
        )
    }

    componentDidMount() {
        this.loadProductList();
    }

    onPageNumChange(pageNum) {
        this.setState({
            pageNum: pageNum
        }, function () {
            this.loadProductList();
        })
    }

    loadProductList() {
        _product.getProductList(this.state.pageNum).then(res => {
            this.setState(res, () => {
                this.setState({
                    firstLoading: false
                })
            });
            console.log(this.state)
        }, errMsg => {
            _util.errorTips(errMsg)
        });
    }
}

export default ProductList;