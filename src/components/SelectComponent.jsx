import CharacterOption from "./CharacterOption"
import "./SelectComponent.css"
export default function SelectionComponent({crosshair, characters, finishSelection}){
    return (
      <div 
        className='selection-cotainer'
        style={{
          top: crosshair.yScreen,
          left: crosshair.xScreen
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
                crosshair={crosshair}
              ></CharacterOption>
            )
          })}
        </div>
      </div>
    )
}