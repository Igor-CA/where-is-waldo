import './App.css';
import {charactersList} from "./characters"
import mainImage from "./assets/the-loc-nar-by-egor-klyuchnyk.jpg"
import { useState } from 'react';
import StartScreen from './components/StartScreen';
import SelectionComponent from './components/SelectComponent';

function App() {
  const [characters, setCharacters] = useState([])
  const [started, setStarted] = useState(false)
  const [crosshair, setCrosshair] = useState({x:0, y:0, xScreen:0, yScreen:0})
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

  const showCrosshair = (e) => {
    setCrosshairPosition(e)
    setSelectionMode(true)
  }

  const showSelectionResult = (selectedCharacter, result) =>{
    if(result){
      console.log(`${selectedCharacter.name} was Found`)
      let newCharactersList = characters.filter(character => character.name !== selectedCharacter.name)
      if(newCharactersList.length > 0){
        setCharacters(newCharactersList)
      }else{
        setRoundCharacters()
        setStarted(false)
      }
    }else{
      console.log(`That is not ${selectedCharacter.name}. Keep looking`)
    }

    setSelectionMode(false)
  }

  const setCrosshairPosition = (e) => {
    let xScreen = e.pageX
    let yScreen = e.pageY
    let xPosition = +(e.pageX/e.target.width).toFixed(2)
    let yPosition = +(e.pageY/e.target.height).toFixed(2)
    setCrosshair({x:xPosition, y:yPosition, xScreen:xScreen, yScreen:yScreen})
  }

  return (
    <div className={started?"App":"App background-mask"}>
      {!started?(
        characters.length > 1 && <StartScreen charactersList={characters} start={startGame}></StartScreen>
      ):null
      }
      <img src={mainImage} alt="game"
        className='game-image'
        onLoad={setRoundCharacters}
        onClick={ e => started && showCrosshair(e)}
      ></img>
      {selectionMode && 
        <SelectionComponent 
          crosshair={crosshair} 
          characters={characters} 
          finishSelection={showSelectionResult}
        ></SelectionComponent>
      }
    </div>
  );
}

export default App;
