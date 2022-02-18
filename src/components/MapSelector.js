/* eslint-disable default-case */
import MapDescription from './MapDescription';
import styles from './cmptStyles/mapSelectorStyles.module.css';

const { modalContentTopDiv, preview } = styles;

const MapSelector = ({currentMapPreview, setMap}) => {
    const {characters, mapName, previewImgPath, imgAlt} = currentMapPreview;
    return (
        <div className={modalContentTopDiv}>
            <img
                className={preview}
                src={previewImgPath}
                alt={imgAlt}
            />
            <MapDescription 
                characters={characters} 
                mapName={mapName} 
                setMap={setMap}
                currentMapPreview={currentMapPreview}
            />
        </div>
    )
}

export default MapSelector;