import FileViewer from 'react-file-viewer';

const DOCXReader = (props)=>{
    return(
      <div>

            <FileViewer 
                fileType={'docx'}
                filePath={props.fileURL}
            />

           {/* <iframe
                type='application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                style={{ width: "563px", height: "666px" }}
                // src={`https://docs.google.com/gview?url=${props.fileURL}&embedded=true`}
                // src={props.fileURL}
                // src={`https://view.officeapps.live.com/op/embed.aspx?src=${props.fileURL}`}
                // src={`https://www.yad2.co.il`}
                // type='application/msword'
                title='title'
                frameBorder="0"
                />  */}


      </div>
    )
  }
  
  export default DOCXReader;