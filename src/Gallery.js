import {useEffect, useState} from "react";
import Draw from "./Draw";
import Preloader from "./Preloader";

const Gallery = (props) => {

  let [loadNext, setLoad] = useState([true])

  useEffect(() => {
    fetchPage(loadNext)
  }, [loadNext])

  useEffect(() => {

    window.addEventListener('scroll', () => {
        if (document.querySelector('#photosList') !== null) {
          if (
            window.scrollY + window.innerHeight >= document.querySelector('#photosList').clientHeight + document.querySelector('#photosList').offsetTop
          ) {
            console.log(`load`)
            setLoad(true)
          } else {
            console.log(`NOload`)
          }
        }
      }
    )

  }, [])

  const fetchPage = (loadNext) => {

    if (loadNext) {

    let imgUrl = `https://www.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=71542c171848da257b3caa214f7ed00f&
      per_page=15&
      page=${props.page}&
      format=json&nojsoncallback=1`

      fetch(imgUrl)
        .then(response => response.json())
        .then(data => {

          let drawElements = {}
          drawElements.photos = data.photos
          drawElements.photos.page = props.page + 1
          drawElements.sources = [...props.state.sources]

          data.photos.photo.forEach((el) => {
            let farmId = el.farm;
            let serverId = el.server;
            let id = el.id;
            let secret = el.secret;

            drawElements.sources.push(
              <Draw key={id} imgSrc={`https://farm${farmId}.staticflickr.com/${serverId}/${id}_${secret}.jpg`}/>
            )
          })

          props.setState(drawElements)
          setLoad(false)

        })
        .catch(console.log)
    }
  }

  console.log(`window.innerHeight-${window.innerHeight}`)

  console.log(`props.state.photos.page-${JSON.stringify(props.state.photos.page)}`)
  console.log(`props.state.photos.pages-${JSON.stringify(props.state.photos.pages)}`)


  return (
    <div>
      <div style={{textAlign: 'center'}}>
        Gallery
      </div>
      {loadNext ? <Preloader/> : null}
      <div id='photosList'>
        {props.state.sources}
      </div>
    </div>
  )
}

export default Gallery
