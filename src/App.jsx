import './App.css'
import arrayPhrases from './utils/phrases.json';
import getRandom from './services/getRandom';
import { useState } from 'react';
import ShowPhrase from './components/ShowPhrase';
import ButtonPhrase from './components/buttonPhrase';
import arrayImagenes from './utils/images.json'

function App() {

  // eslint-disable-next-line no-unused-vars
  const[phrase, setPhrase] = useState(getRandom(arrayPhrases));

  const [image, setImage] = useState(getRandom(arrayImagenes));

  const objStyles ={
    backgroundImage: `url(../assets//fondo${image}.jpg)`,
  }

  return (
      <div className='app' style={objStyles}>
        <h1 className='app__title'>Galletas de la fortuna</h1>
        <ButtonPhrase
        setPhrase={setPhrase} setImage={setImage}>
        </ButtonPhrase>
        <ShowPhrase phrase={phrase}>
        </ShowPhrase>
        
      </div>
  )
}

export default App;
