import './App.css';
import {charactersList} from "./characters"
import mainImage from "./assets/the-loc-nar-by-egor-klyuchnyk.jpg"
import { useState } from 'react';
import StartScreen from './components/StartScreen';
import SelectionComponent from './components/SelectComponent';
import EndScreen from './components/EndScreen';

function App() {
  const [characters, setCharacters] = useState([])
  const [started, setStarted] = useState(false)
  const [crosshair, setCrosshair] = useState({x:0, y:0, xScreen:0, yScreen:0})
  const [selectionMode, setSelectionMode] = useState(false)
  const [resultMessage, setresultMessage] = useState(null)
  const [gameTime, setgameTime] = useState()
  const [endScreen, setEndScreen] = useState(false)

  const shuffleCaractersList = () => {
    let shuffledList = [...charactersList]
    for(let i=0; i<charactersList.length; i++){
      let j = Math.floor(Math.random()*charactersList.length);
      [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]]
    }
    return shuffledList
  }
  
  const setGameCharacters = () => {
    let shuffledList = shuffleCaractersList()
    let roundCharacters = shuffledList.filter((characters, index) => {
      return index<3
    })
    setCharacters(roundCharacters)
  }
  
  const startGame = () => {
    setGameCharacters()
    setStarted(false)
    setEndScreen(false)
  }

  const startRound = () => {
    setStarted(true)
    setgameTime(new Date())
  }

  const showCrosshair = (e) => {
    setCrosshairPosition(e)
    setSelectionMode(true)
  }

  const showSelectionResult = (selectedCharacter, result) =>{
    if(result){
      showMessage(`${selectedCharacter.name} was found congratulations`, result)
      let newCharactersList = characters.filter(character => character.name !== selectedCharacter.name)
      if(newCharactersList.length > 0){
        setCharacters(newCharactersList)
      }else{
        endGame()
      }
    }else{
      showMessage(`That is not ${selectedCharacter.name}. Keep looking`, result)
    }
    setSelectionMode(false)
  }

  function showMessage(message, wasFound){
    setresultMessage(
      <p className={wasFound?'message green': 'message message--red'}>
        {message}
      </p>
    )
    setTimeout(()=>{setresultMessage(null)}, 3000)
  }
  const seeRoundTime = () => {
    const currentTime = new Date()
    const oldTime = gameTime
    const timeDifference = (currentTime.getTime() - oldTime.getTime())/1000
    return timeDifference
  }
  const endGame = ()=> {
    setgameTime(seeRoundTime)
    setEndScreen(true)
  }

  const setCrosshairPosition = (e) => {
    let xScreen = e.pageX
    let yScreen = e.pageY
    let xPosition = +(e.pageX/e.target.width).toFixed(2)
    let yPosition = +(e.pageY/e.target.height).toFixed(2)
    setCrosshair({x:xPosition, y:yPosition, xScreen:xScreen, yScreen:yScreen})
  }

  return (
    <div className={(!endScreen && started)?"App":"App background-mask"}>
      {!started?(
        characters.length > 1 && <StartScreen charactersList={characters} start={startRound}></StartScreen>
      ):null
      }
      {resultMessage}
      <img src={mainImage} alt="game"
        className='game-image'
        onLoad={startGame}
        onClick={ e => started && showCrosshair(e)}
      ></img>
      {selectionMode && 
        <SelectionComponent 
          crosshair={crosshair} 
          characters={characters} 
          finishSelection={showSelectionResult}
        ></SelectionComponent>
      }
      {endScreen &&
        <EndScreen time={gameTime} restartGame={startGame}></EndScreen>
      }
    </div>
  );
}

export default App;
