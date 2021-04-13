import './App.css';
import Gallery from "./Gallery";
import {useState} from "react";



const App = () => {
let initialState = {photos: {page: 1}, sources: []}

const [state, setState] = useState(initialState)

  return (
    <div className="App">
      <Gallery state={state} setState={setState} page={state.photos.page}/>
    </div>
  );
}

export default App;
