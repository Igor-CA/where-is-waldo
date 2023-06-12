import './App.css';
import {charactersList} from "./characters"
import mainImage from "./assets/the-loc-nar-by-egor-klyuchnyk.jpg"
import { useState } from 'react';
import StartScreen from './components/StartScreen';

function App() {
  const [characters, setCharacters] = useState([])
  const [started, setStarted] = useState(false)
  const [crosshair, setCrosshair] = useState({x:0, y:0})
  const [selectionMode, setSelectionMode] = useState(false)

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
    setCharacters(roundCharacters)
  }
  
  const startGame = () => {
    setStarted(true)
  }

  const sendPosition = (e) => {
    let xPosition = (e.pageX/e.target.width).toFixed(2)
    let yPosition = (e.pageY/e.target.height).toFixed(2)
    if(started){
      console.log(xPosition, yPosition)
    }
  }

  const showCrosshair = (e) => {
    setCrosshairPosition(e)
    setSelectionMode(true)
  }

  const setCrosshairPosition = (e) => {
    let xPosition = e.pageX
    let yPosition = e.pageY
    setCrosshair({x:xPosition, y:yPosition})
  }
 
  return (
    <div className={started?"App":"App background-mask"}>
      {!started?(
        characters.length > 1 && <StartScreen charactersList={characters} start={startGame}></StartScreen>
      ):null
      }
      <img src={mainImage} alt="game"
        className='game-image'
        onClick={ e => showCrosshair(e)}
        onLoad={setRoundCharacters}
      ></img>
      {selectionMode && 
        <div 
          className='crosshair'
          style={{
            top: crosshair.y,
            left: crosshair.x
          }}
        ></div>
      }
    </div>
  );
}

export default App;
