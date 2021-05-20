import logo from './logo.svg';
import './App.css';
// import TodoContainer from "./functionBased/components/TodoContainer"
// import ReactDOM from "react-dom"
import React, {useState, useEffect} from "react"
import Content from "./components/Content"
import Form from "./components/Form"
import Result from "./components/Result"

function App() {
  let contentContainerRef = React.useRef<HTMLElement | null>(null)
  let resultContainerRef = React.useRef<HTMLElement | null>(null)

  const [images, setImages] = useState([])
  const [ativeImage, setActiveImage] = useState('')
  const [textTop, setTextTop] = useState('')
  const [textBottom, setTextBottom] = useState('')
  const [isMemeGenerated, setIsMemeGenerated] = useState(false)


  async function fetchImage() {
    // Get the memes
    const imgData = await fetch('https://api.imgflip.com/get_memes').then(res => res.json()).catch(err => console.error(err))
    const { memes } = await imgData.data
    // Update images state
    await setImages(memes)
    // Update activeImage state
    await setActiveImage(memes[0].url)
  }

  function handleInputChange(event){
    if(event.target.name === 'text-top'){
      //Update textTop state
      setTextTop(event.target.velue)
    } else {
      //Update textBottom state
      setTextBottom(event.target.value)
    }
  }
  //...

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
