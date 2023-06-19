import "./CharacterCard.css"

export default function CharacterCard({character}){
    const {image, name, origin} = character
    return(
        <div className="character-card">
            <div className="character-card__image-container">
                <img src={image} alt={name} className="character-card__image"/>
            </div>
            <div className="character-card__info">
                <p className="character-card__info__name"><strong>{name}</strong></p>
                <p className="character-card__info_origin">{origin}</p>
            </div>
        </div>
    )
}