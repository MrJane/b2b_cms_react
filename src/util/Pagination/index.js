import React,{Copmonent} from 'react'
import RcPagination from 'rc-pagination'
import 'rc-pagination/dist/rc-pagination.min.css'
class Pagination extends Copmonent{
    render(){
        return (
            <div className="row">
                <div className="col-md-12">
                    <RcPagination {...this.props} showQuickJump onShowSizeChange/>
                </div>
            </div>
        )
    }
}