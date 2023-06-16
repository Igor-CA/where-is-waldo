import CharacterCard from "./CharacterCard"
import "./StartScreen.css"

export default function StartScreen({charactersList, start}){
    return(
        <div className='start-screen'>
            
            <div className="start-screen__basic-info">
                <h1>Whelcome to "where is ...?"</h1>
                <p>The objective of this game is to find the three characters bellow</p>
                <p>Once you click start you can navigate throught the image and the countdown will start</p>
                <p>Good luck and have fun!</p>
            </div>
            <div className="start-screen__characters-container">
                {charactersList.map(character => {
                    return(
                        <CharacterCard
                            key={character.name}
                            character={character}
                        ></CharacterCard>
                    )
                })}
            </div>

            <input 
                type="button"
                value="Start Game"
                className="start-button"
                onClick={start}
            />
        </div>
    )
}