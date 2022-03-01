import CharDescription from './CharDescription';
import uniqid from 'uniqid';
import styles from './cmptStyles/mapSelectorStyles.module.css';

const { mapDescription, mapTitle, egor, startButton } = styles;

const MapDescription = ({characters, mapName, setMap, currentMapPreview: chosenMap}) => {

    const charDescriptionList = characters.map(character => {
        return <CharDescription key={uniqid()} character={character} />    
    });

    return (
        <section className={mapDescription}>
            <div>
                <h2 className={mapTitle}>{mapName}</h2>
                <p className={egor}>by Egor Klyuchnyk</p>
            </div>
            {charDescriptionList}
            <button type='button' className={startButton} onClick={() => setMap(chosenMap)}>
                Start
            </button>
        </section>
    )
}

export default MapDescription;

