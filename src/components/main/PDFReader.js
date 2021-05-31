
const PDFReader = (props)=>{

  return(
    <div>
        <iframe
                style={{ width: "563px", height: "666px" }}
                src={props.fileURL}
                type='application/pdf'
                title='title'
              />
    </div>
  )
}

export default PDFReader;