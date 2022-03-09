/* eslint-disable default-case */
import { ImArrowRight, ImArrowLeft } from 'react-icons/im';
import styles from './cmptStyles/overlayStyles.module.css';
import the_loc_nar_preview from '../images/the_loc_nar_preview.jpg';
import ultimate_space_battle_preview from '../images/ultimate_space_battle_preview.jpg';
import universe_preview from '../images/universe_113_preview.jpg';


const { whole, hunt, mapChooser, arrowButton, appTitle } = styles;

const theLocNar = {
    previewImgPath: the_loc_nar_preview,
    imgAlt: 'The Loc Nar by Egor Klyuchnyk',
    mapName: 'The Loc Nar',
    characters: ['Link', 'Rocko Rama', 'Worm', 'Batman',],
};
const ultimateSpaceBattle = {
    previewImgPath: ultimate_space_battle_preview,
    imgAlt: 'Ultimate Space Battle by Egor Klyuchnyk',
    mapName: 'Ultimate Space Battle',
    characters: ['Bugs Bunny', 'Martian', 'Ryuk', 'Thomas the Tank Engine'],
};
const universe113 = {
    previewImgPath: universe_preview,
    imgAlt: 'Universe 113 by Egor Klyuchnyk',
    mapName: 'Universe 113',
    characters: ['Johnny Bravo', 'Bender Rodriguez', 'CatDog', 'Yautja'],
}

const OverlayElementForMapSelector 
    = (props, contentElement, currentMapPreview, setCurrentMapPreview) => {

    function previousMapPreview() {
        switch (currentMapPreview.previewImgPath) {
            case ultimate_space_battle_preview:
                setCurrentMapPreview(theLocNar);
                break;
            case the_loc_nar_preview:
                setCurrentMapPreview(universe113);
                break;
            case universe_preview:
                setCurrentMapPreview(ultimateSpaceBattle);
                break;
        }
    }
    function nextMapPreview() {
        switch (currentMapPreview.previewImgPath) {
            case ultimate_space_battle_preview:
                setCurrentMapPreview(universe113);
                break;
            case the_loc_nar_preview:
                setCurrentMapPreview(ultimateSpaceBattle);
                break;
            case universe_preview:
                setCurrentMapPreview(theLocNar);
                break;
        }
    }


    return (
        <div {...props}>
            {contentElement}
            <div className={whole}>
                <h1 className={appTitle}>Character <span className={hunt}>Hunt</span></h1>
                <div className={mapChooser}>
                    <button className={arrowButton} onClick={previousMapPreview}>
                        <ImArrowLeft />
                    </button>
                    <span>Choose Map</span>
                    <button className={arrowButton} onClick={nextMapPreview}>
                        <ImArrowRight />
                    </button>
                </div>
            </div>
        </div>
    )
};

export { theLocNar };
export default OverlayElementForMapSelector;