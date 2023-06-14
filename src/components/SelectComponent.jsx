import "./SelectComponent.css"
export default function SelectionComponent({crosshair, characters}){
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
          <button className='selection-cotainer__input'>{characters[0].name}</button>
          <button className='selection-cotainer__input'>{characters[1].name}</button>
          <button className='selection-cotainer__input'>{characters[2].name}</button>
        </div>
      </div>
    )
}