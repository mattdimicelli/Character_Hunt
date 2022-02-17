import MapDescription from './MapDescription';
import universe_preview from '../images/universe_113_preview.jpg';
import styles from './cmptStyles/mapSelectorStyles.module.css';

const { modalContentTopDiv, preview } = styles;

const MapSelector = ({currentMapPreview}) => {
    return (
        <div className={modalContentTopDiv}>
            <img
                className={preview}
                src={universe_preview}
                alt="preview of Universe 113"
            />
            <MapDescription characters={[
                'Johnny Bravo',
                'Bender Rodriguez',
                'CatDog',
                'Yautja'
            ]} />
        </div>
    )
}

export default MapSelector;