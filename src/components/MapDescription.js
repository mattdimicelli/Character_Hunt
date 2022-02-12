import CharDescription from './CharDescription';
import uniqid from 'uniqid';
import styles from './cmptStyles/mapSelectorStyles.module.css';

const { mapDescription, mapTitle, egor, startButton } = styles;

const MapDescription = ({characters}) => {
    return (
        <section className={mapDescription}>
            <div>
                <h2 className={mapTitle}>Universe 113</h2>
                <p className={egor}>by Egor Klyuchnyk</p>
            </div>
            {characters.map(character => {
                return <CharDescription key={uniqid()} character={character} />    
            })}
            <button type='button' className={startButton}>Start</button>
        </section>
    )
}

export default MapDescription;

