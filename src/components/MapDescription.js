import CharDescription from './CharDescription';
import uniqid from 'uniqid';
import styles from './cmptStyles/mapSelectorStyles.module.css';

const { mapDescription, mapTitle } = styles;

const MapDescription = ({characters}) => {
    return (
        <section className={mapDescription}>
            <h2 className={mapTitle}>Universe 113</h2>
            <p style={{margin: '0'}}>by Egor Klyuchnyk</p>
            {characters.map(character => {
                return <CharDescription key={uniqid()} character={character} />    
            })}
        </section>
    )
}

export default MapDescription;

