import React, {Component} from 'react'
import Product from '../service/productService';
import Util from '../util';

const _product = new Product();
const _util = new Util();

class CategorySelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstCategoryList: [],
            secondCategoryList: [],
            firstCategoryId: 0,
            secondCategoryId: 0
        }
    }

    loadFirstCategory() {
        _product.getCategoryList().then(res => {
            this.setState({
                firstCategoryList: res
            })
        }, errMsg => {
            _util.errorTips(errMsg)
        })
    }

    loadSecondCategory() {
        _product.getCategoryList(this.state.firstCategoryId).then(res => {
            this.setState({
                secondCategoryList: res
            })
        }, errMsg => {
            _util.errorTips(errMsg)
        })
    }

    render() {
        return (
            <div className="col-md-10">
                <select onChange={(e) => {
                    this.onFisrtCategoryChange(e)
                }} className="form-control cate-select">
                    <option>请选择一级分类</option>
                    {
                        this.state.firstCategoryList.map((category, index) => <option value={category.id}
                                                                                      key={index}>{category.name}</option>)
                    }

                </select>
                {
                    this.state.secondCategoryList.length ? (
                        <select onChange={(e) => this.onSecondCategoryChange(e)} className="form-control cate-select">
                            <option>请选择二级分类</option>
                            {
                                this.state.secondCategoryList.map((category, index) => <option value={category.id}
                                                                                               key={index}>{category.name}</option>)
                            }
                        </select>
                    ) : null
                }
            </div>
        )
    }

    onFisrtCategoryChange(e) {
        let newValue = e.target.value || 0;
        this.setState({
            secondCategoryList: [],
            firstCategoryId: newValue,
            secondCategoryId: 0
        }, () => {
            this.loadSecondCategory();
            this.onPropsCagegoryChange();
        })
    }

    onSecondCategoryChange(e) {
        let newValue = e.target.value || 0;
        this.setState({
            secondCategoryId: newValue
        },()=>{
            this.onPropsCagegoryChange();
        })
    }

    onPropsCagegoryChange() {
        let isPropsFunction = typeof this.props.onCategoryChange;
        if (this.state.secondCategoryId) {
            isPropsFunction && this.props.onCategoryChange(this.state.secondCategoryId, this.state.firstCategoryId)
        } else {
            isPropsFunction && this.props.onCategoryChange(this.state.firstCategoryId, 0)
        }
    }

    componentDidMount() {
        this.loadFirstCategory();
    }
}

export default CategorySelector