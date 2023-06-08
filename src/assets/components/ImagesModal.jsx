import Carousel from 'react-bootstrap/Carousel'
import Modal from 'react-bootstrap/Modal'
import Ratio from 'react-bootstrap/Ratio'

export function ImagesModal (props) {
  return (
    <Modal
      {...props}
      size='sm'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Carousel slide={false} interval={null}>
        {
          props.videos === undefined
            ? ''
            : props.videos.map(video =>
              <Carousel.Item key={video}>
                <Ratio aspectRatio={1600 / 9}>
                  <iframe
                    width='455' height='809' src={video}
                    title='app js PhotoSelfie con chroma key videos'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    allowFullScreen
                  />
                </Ratio>
              </Carousel.Item>
            )
        }
        {
          props.galeria.map(img =>
            <Carousel.Item key={img}>
              <img
                className='d-block w-100'
                src={img}
                alt='First slide'
              />
            </Carousel.Item>
          )
        }

      </Carousel>

    </Modal>
  )
}
