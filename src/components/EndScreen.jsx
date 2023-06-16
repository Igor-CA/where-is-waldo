import "./EndScreen.css"
export default function EndScreen({time, restartGame}){
    const endGame = () => {

    }
    return(
        <div className="end-screen">
            <h2 className="end-screen__text">Congratulations you found all tree characters</h2>
            <h3 className="end-screen__text">Your time was: {time} seconds</h3>
            <form className="end-screen__form">
                <label htmlFor="player-name">Nickname:</label>
                <input type="text" placeholder="Your nickname" name="player-name"></input>
            </form>
            <input 
                type="button"
                value='Enviar' 
                className="end-screen__button"
                onClick={restartGame}
            />
        </div>
    )
}