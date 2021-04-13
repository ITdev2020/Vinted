import preloaderImage from './assets/icon-ajax-loading-spinner.svg'

const Preloader = () => {
  return <div style={{backgroundColor: 'white'}}>
    <img src={preloaderImage} alt="preloaderImage"/>
  </div>
}

export default Preloader
