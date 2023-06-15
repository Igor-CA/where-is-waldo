import {collection, getDocs, query, where} from "firebase/firestore"
import {db} from '../firebase/config'

export default function CharacterOption({character, finishSelection, crosshair}){
    async function getPosition(character) {
        const characterQuerry = query(collection(db, "charactersPositions"), where("character", "==", character.name))
        const characterSnapshot = await getDocs(characterQuerry)
        const characterQuerryResult = characterSnapshot.docs.map(doc => doc.data())[0];
        const characterPosition = characterQuerryResult.position
        return characterPosition
    }
    const checkPosition = (coord) =>{
        const tollerance = 0.02
        const x = coord[0]
        const y = coord[1]
        if(x<(crosshair.x+tollerance) && x>=(crosshair.x-tollerance)
            && (y<(crosshair.y+tollerance) && y>=(crosshair.y-tollerance)))
            return true
        
            return false
    } 
    async function verifySelection(){
        const position = await getPosition(character)
        const result = checkPosition(position)
        finishSelection(character ,result)
    }    
    return (
        <button className='selection-cotainer__input'
            onClick={verifySelection}
        >{character.name}</button>
    )
}