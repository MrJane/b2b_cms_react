import React,{Component} from 'react'
class Layout extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="wrapper">
                90000
                {this.props.children}
            </div>
        )
    }
}
export default Layout