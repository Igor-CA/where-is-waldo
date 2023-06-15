import {collection, getDocs, query, where} from "firebase/firestore"
import {db} from '../firebase/config'

export default function CharacterOption({character, finishSelection}){
    async function getPosition(character) {
        const characterQuerry = query(collection(db, "charactersPositions"), where("character", "==", character.name))
        const characterSnapshot = await getDocs(characterQuerry)
        const characterQuerryResult = characterSnapshot.docs.map(doc => doc.data())[0];
        const characterPosition = characterQuerryResult.position
        console.log(characterPosition)
        return characterPosition
    } 
    return (
        <button className='selection-cotainer__input'
            onClick={() => {getPosition(character); finishSelection(false)}}
        >{character.name}</button>
    )
}