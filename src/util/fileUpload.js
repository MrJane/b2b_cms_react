import React,{Component}    from 'react'
import FileUpload           from './file-upload'
class FileUploader extends Component{
    render(){
        const options = {
            baseUrl:'/manage/product/upload.do',
            fileFieldName:'upload_file',
            dataType:"json",
            uploadSuccess:(res)=>{
                console.log(res)
            },
            uploadError : function(err){
                alert(err.message)
            },
        };
        return(
            <FileUpload options={options}>
                <button ref="chooseBtn">choose</button>
                <button ref="uploadBtn">upload</button>
            </FileUpload>
        )
    }
}
export default FileUploader