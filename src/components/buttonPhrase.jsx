/* eslint-disable no-unused-vars */
import React from 'react'
import arrayPhrases from '../utils/phrases.json'
import getRandom from '../services/getRandom'
import arrayImages from '../utils/images.json'

const buttonPhrase = ({setPhrase, setImage}) => {

  const handlePhrase = () =>{
    setPhrase(getRandom(arrayPhrases));
    setImage(getRandom(arrayImages));
  }
  return (
    <button className='btn' onClick={handlePhrase}>Probar mi suerte</button>
  )
}

export default buttonPhrase
