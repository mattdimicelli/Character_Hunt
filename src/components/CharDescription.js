const CharDescription = ({imgSrc, imgAlt, charName, whereFrom}) => {
    return (
        <section>
                <img src={imgSrc} alt={imgAlt} />
                <h3>{charName}</h3>
                <p>{whereFrom}</p>
        </section>
    )
}
export default CharDescription;