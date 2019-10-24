import React,{Fragment, useState, useCallback} from 'react'
import Gallery from 'react-photo-gallery'
import Carousel, {Modal,ModalGateway} from 'react-images'
import { photos } from './AddPhotos'
//component 
function Photos(){
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((event,{ photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);

  };

  return(
    <Fragment>
    <div className="Gallery">
      <Gallery photos = {photos} onClick = {openLightbox}/>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose = {closeLightbox}>
            <Carousel
                currentIndex = {currentImage}
                views = {photos.map(x =>({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title
                }))}
                />
          </Modal>
        ): null }
      </ModalGateway>
    </div>
    </Fragment>
  );
}



// class Photos extends Component{
//   render() {
//     return(
//       <Fragment>
//         <h1> Hola soy Photos</h1>
//       </Fragment>
//     )
//   }
// }

export default Photos