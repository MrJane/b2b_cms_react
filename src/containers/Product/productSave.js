import React from 'react'
import PageTitle from '../../component/PageTitle'
import CategorySelector from '../../util/categorySelector'
import FileLoader from '../../util/fileUpload'
import './save.css'

class ProdcutSave extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryId: 0,
            parentId: 0
        }
    }

    onCategoryChange(categoryId, parentId) {
        this.setState = ({
            categoryId: categoryId,
            parentId: parentId
        },()=>{
            console.log('你好',this.state)
        });

        console.log('parentId', parentId)
        console.log('categoryId', categoryId)
    }

    render() {
        return (
            <div id="page-wrapper">
                <PageTitle title="商品管理--添加商品"></PageTitle>
                <div className="form-horizontal">
                    <div className="form-group">
                        <label htmlFor="inputEmail3" className="col-md-2 control-label">商品名称</label>
                        <div className="col-md-5">
                            <input type="text" className="form-control" id="inputEmail3" placeholder="请输入商品名称"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword3" className="col-md-2 control-label">商品描述</label>
                        <div className="col-md-5">
                            <input type="text" className="form-control" id="inputPassword3" placeholder="请输入商品描述"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword3" className="col-md-2 control-label">所属分类</label>
                        <CategorySelector onCategoryChange={(categoryId, parentId) => {
                            this.onCategoryChange(categoryId, parentId)
                        }}></CategorySelector>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword3" className="col-md-2 control-label">商品价格</label>
                        <div className="col-md-3">
                            <div className="input-group">
                                <input type="number" className="form-control" id="exampleInputAmount"
                                       placeholder="价格"/>
                                <div className="input-group-addon">元</div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword3" className="col-md-2 control-label">商品库存</label>
                        <div className="col-md-3">
                            <div className="input-group">
                                <input type="number" className="form-control" id="exampleInputAmount"
                                       placeholder="库存"/>
                                <div className="input-group-addon">件</div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword3" className="col-md-2 control-label">商品图片</label>
                        <div className="col-md-5">
                            <FileLoader></FileLoader>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-default">Sign in</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProdcutSave