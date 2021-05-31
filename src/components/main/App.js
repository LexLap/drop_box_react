import { useEffect, useState, useContext } from 'react';
import { deleteImage, getIamgesData, uploadImage } from '../../server/images';
import { LoginContext } from '../../context/LoginContext';
import PDFReader from './PDFReader'
import DOCXReader from './DOCXReader';
import FileViewer from 'react-file-viewer';


function App() {
  const { userData } = useContext(LoginContext)
  // const URL = "https://ariyeb-photos-storage.s3-eu-west-1.amazonaws.com/";
  // const URL = "https://drop-box-storage.s3-eu-west-1.amazonaws.com/";
  const URL = "http://localhost:3030/get-image"
  const [images, setImages] = useState([]);
  const imageTypes = ['jpeg', 'png', 'jfif', 'jpg']

  
  useEffect(() => {
    getIamgesData(userData.token)
      .then(newImages => {
        // console.log(newImages);
        setImages(newImages);
      });
  }, [userData.token]);

  const onSubmitForm = (event) => {
    event.preventDefault();
    const image = event.target.children[0].files[0];
    const formData = new FormData();
    formData.append("image", image);

    uploadImage(formData, userData.token)
      .then(res => {
        console.log(res);
        return getIamgesData(userData.token);
      })
      .then(newImages => {
        setImages(newImages);
      });
  };

  const onClickDelete = (id, key) => {
    deleteImage(id, key)
      .then(() => {
        // alert("Image deleted");
        return getIamgesData(userData.token);
      })
      .then(newImages => {
        setImages(newImages);
      });
  };


  return (
    <div className="home">

      <h1>Image App</h1>
      <form onSubmit={ onSubmitForm }>
        <input type="file" name="image" />
        <button type="submit">Submit</button>
      </form>
      {
        images.map(image => (
          <div key={ image._id }>
            <h3>{ image.originalName }</h3>

            {/* <FileViewer 
                fileType={image.fileType}
                filePath={URL + `?key=${image.key}&name=${image.originalName}`}
            /> */}

            { image.fileType === 'pdf' && 
              <PDFReader fileURL = { URL + `?key=${image.key}&name=${image.originalName}` }/>}
            
            { image.fileType === 'docx' &&   
              <DOCXReader fileURL = { URL + `?key=${image.key}&name=${image.originalName}` }/>}

            { imageTypes.includes(image.fileType) && 
              <img src={ URL + `?key=${image.key}&name=${image.originalName}`} alt={'img'}/>} 


            <button onClick={ () => onClickDelete(image._id, image.key) }>
              Delete { image.originalName }
            </button>
            <hr />
          </div>
        ))
      }
    </div>
  );
}

export default App;
