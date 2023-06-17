import { useState } from "react"
import { addDoc, collection } from "firebase/firestore";
import {db} from '../firebase/config'


import "./EndScreen.css"
export default function EndScreen({time, restartGame}){
    const [playerName, setPlayerName] = useState('')
    async function endGame(){
        const dbRefference = collection(db, "Players")
        const player = {
            name: playerName,
            time: time
        }
        await addDoc(dbRefference, player)
        restartGame()
        //restart game
    }
    const handleChange = (e) =>{
        const name = e.target.value
        setPlayerName(name)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        endGame()
    }
    return(
        <div className="end-screen">
            <h2 className="end-screen__text">Congratulations you found all tree characters</h2>
            <h3 className="end-screen__text">Your time was: {time} seconds</h3>
            <form className="end-screen__form" onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="player-name">
                    Nickname:
                    <input 
                        type="text"
                        placeholder="Your nickname" 
                        name="player-name"
                        onChange={(e) => handleChange(e)}
                    ></input>
                </label>
                <input 
                    type="submit"
                    value='Enviar' 
                    className="end-screen__button"
                />
            </form>
        </div>
    )
}