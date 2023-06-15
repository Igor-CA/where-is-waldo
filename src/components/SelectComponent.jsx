import CharacterOption from "./CharacterOption"
import "./SelectComponent.css"
export default function SelectionComponent({crosshair, characters, finishSelection}){
    return (
      <div 
        className='selection-cotainer'
        style={{
          top: crosshair.y,
          left: crosshair.x
        }}
      >
        <div
          className='selection-cotainer__crosshair'
        ></div>
        <div className='selection-cotainer__inputs-container'>
          {characters.map(character => {
            return(
              <CharacterOption 
                key={character.name} 
                character={character}
                finishSelection={finishSelection}
              ></CharacterOption>
            )
          })}
        </div>
      </div>
    )
}