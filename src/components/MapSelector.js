/* eslint-disable default-case */
import MapDescription from './MapDescription';
import styles from './cmptStyles/mapSelectorStyles.module.css';

const { modalContentTopDiv, preview } = styles;

const MapSelector = ({currentMapPreview}) => {
    console.log(currentMapPreview.mapName)
    let characters;
    switch (currentMapPreview.mapName) {
        case 'Universe 113':
            characters = [
                'Johnny Bravo',
                'Bender Rodriguez',
                'CatDog',
                'Yautja'
            ];
            break;
        case 'Ultimate Space Battle':
            characters = [
                'Bugs Bunny',
                'Martian',
                'Ryuk',
                'Thomas the Tank Engine',
            ];
            break;
        case 'The Loc Nar':
            characters = [
                'Link',
                'Rocko Rama',
                'Worm',
                'Batman',
            ];
            break;
    }
    return (
        <div className={modalContentTopDiv}>
            <img
                className={preview}
                src={currentMapPreview.imgPath}
                alt={currentMapPreview.imgAlt}
            />
            <MapDescription characters={characters} mapName={currentMapPreview.mapName}/>
        </div>
    )
}

export default MapSelector;