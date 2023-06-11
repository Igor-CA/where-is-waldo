import './App.css';
import {charactersList} from "./characters"
import mainImage from "./assets/the-loc-nar-by-egor-klyuchnyk.jpg"
import { useState } from 'react';
import StartScreen from './components/StartScreen';

function App() {
  const [characters, setCharacters] = useState([])

  const shuffleCaractersList = () => {
    let shuffledList = [...charactersList]
    for(let i=0; i<charactersList.length; i++){
      let j = Math.floor(Math.random()*charactersList.length);
      [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]]
    }
    return shuffledList
  }
  
  const setRoundCharacters = () => {
    let shuffledList = shuffleCaractersList()
    let roundCharacters = shuffledList.filter((characters, index) => {
      return index<3
    })
    console.log(roundCharacters)
    setCharacters(roundCharacters)
  }
  

  return (
    <div className="App">
      {characters.length === 3 && <StartScreen charactersList={characters}></StartScreen>}
      <img src={mainImage} alt="game"
        className='game-image'
        onClick={(e) => console.log((e.pageX/e.target.width).toFixed(2), (e.pageY/e.target.height).toFixed(2))}
        onLoad={setRoundCharacters}
      ></img>
    </div>
  );
}

export default App;
