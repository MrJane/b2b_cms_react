import React, {Component} from 'react';
import {Link} from 'react-router-dom'


import PageTitle from '../../component/PageTitle'
import TableList from '../../util/tableList'
import Pagination from 'rc-pagination'


import Product from '../../service/productService'
import Util from '../../util'
import './product.css'

const _product = new Product();
const _util = new Util();

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            pageNum: 1,
            searchType: 'productId',
            searchKeyWord: '',
            listType: 'list',
            firstLoading: true
        }
        this.loadProductList = this.loadProductList.bind(this)
        this.onChangeProductStatus = this.onChangeProductStatus.bind(this)
        this.onSearch = this.onSearch.bind(this)
        // this.onPageNumChange=this.onPageNumChange.bind(this)
    }

    render() {
        let tableHeads = [
            {name: '商品ID', width: '10%'},
            {name: '商品信息', width: '50%'},
            {name: '价格', width: '10%'},
            {name: '状态', width: '15%'},
            {name: '操作', width: '15%'},
        ];
        let listBody = this.state.list.map(function (product, index) {
            return (
                <tr key={index}>
                    <td>{product.id}</td>
                    <td>
                        <p>{product.name}</p>
                        <p>{product.subtitle}</p>
                    </td>
                    <td>￥{product.price}</td>
                    <td>
                        {product.status === 1 ? '在售' : '已下架'}
                        <button onClick={(e) => {
                            this.onChangeProductStatus(e, product.id, product.status)
                        }}>{product.status === 1 ? '上架' : '下架'}</button>
                    </td>
                    <td>
                        <Link to={'/product/detail/' + product.id}>查看详情</Link>
                        <Link to={'/product/save/' + product.id}>编辑</Link>
                    </td>
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
                <PageTitle title="商品列表">
                    <div className="page-header-right">
                        <a className="btn btn-primary" href="/product/save">
                            <i className="fa fa-plus"></i>
                            <span>添加商品</span>
                        </a>
                    </div>
                </PageTitle>
                <div className="row search-wrap">
                    <div className="col-md-12">
                        <div className="form-inline">
                            <div className="form-group">
                                <select name="searchType" onChange={(e) => {
                                    this.onSearchValueChange(e)
                                }} className="form-control">
                                    <option value="productId">按商品ID查询</option>
                                    <option value="productName">按商品名称查询</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input name="searchKeyWord" onChange={(e) => {
                                    this.onSearchValueChange(e)
                                }} type="text" className="form-control" id="exampleInputEmail2"
                                       placeholder="关键字"/>
                            </div>
                            <button onClick={(e) => {
                                this.onSearch(e, this.state.searchType, this.state.searchKeyWord)
                            }} className="btn btn-primary">搜索
                            </button>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <TableList tableHeads={tableHeads}>{
                            this.state.list.map((product, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{product.id}</td>
                                        <td>
                                            <p>{product.name}</p>
                                            <p>{product.subtitle}</p>
                                        </td>
                                        <td>￥{product.price}</td>
                                        <td>
                                            <p> {product.status === 1 ? '在售' : '已下架'}</p>
                                            <button className="btn btn-xs btn-warning"
                                                    onClick={(e) => {
                                                        this.onChangeProductStatus(e, product.id, product.status)
                                                    }}>{product.status == 1 ? '下架' : '上架'}</button>
                                        </td>
                                        <td>
                                            <Link className="opear" to={`/product/detail/${product.id}`}>详情</Link>&emsp;
                                            <Link className="opear" to={`/product/save/${product.id}`}>编辑</Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </TableList>
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

    onChangeProductStatus(e, ProductId, curStatus) {
        let newStatus = curStatus === 1 ? 2 : 1,
            confirmTips = curStatus === 1 ? '确定要下架该商品' : '确定要上架该商品';
        if (window.confirm(confirmTips)) {
            _product.setProductStatus({
                productId: ProductId, status: newStatus
            }).then(res => {
                _util.successTips(res);
                this.loadProductList();
            }, errMsg => {
                _util.errorTips(errMsg);
            })
        }

    }

    onPageNumChange(pageNum) {
        this.setState({
            pageNum: pageNum
        }, function () {
            this.loadProductList();
        })
    }

    loadProductList() {
        let listParam = {};
        listParam.listType = this.state.listType;
        listParam.pageNum = this.state.pageNum;
        if (this.state.listType === 'search') {
            listParam.searchType = this.state.searchType;
            listParam.keyword    = this.state.searchKeyWord;
        }
        _product.getProductList(listParam).then(res => {
            this.setState(res, () => {
                this.setState({
                    firstLoading: false
                })
            });
            console.log(this.state)
        }, errMsg => {
            this.setState({
                list:[]
            });
            _util.errorTips(errMsg)
        });
    }

    //先实现组件内的
    onSearchValueChange(e) {
        let name = e.target.name,
            value = e.target.value;

        this.setState({
            [name]: value
        })
        console.log(this.state)
    }

    //搜索
    onSearch(e, searchType, searchKeyWord) {
        console.log(this.state.searchType,this.state.searchKeyWord)
        let listType = searchKeyWord === '' ? 'list' : 'search';
        this.setState({
            listType: listType,
            pageNum: 1,
            searchType: searchType,
            searchKeyWord: searchKeyWord
        }, () => {
            this.loadProductList();
        })
        // this.props.onSearch()
    }
}

export default ProductList;