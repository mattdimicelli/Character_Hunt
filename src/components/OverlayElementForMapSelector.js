/* eslint-disable default-case */
import { ImArrowRight, ImArrowLeft } from 'react-icons/im';
import styles from './cmptStyles/overlayStyles.module.css';

const { whole, hunt, mapChooser, arrowButton, appTitle, mapChooserText } = styles;

const OverlayElementForMapSelector = (props, contentElement, currentMapPreview, setCurrentMapPreview) => {
    function changeMapPreview(number) {
        let current;
        switch (currentMapPreview) {
            case 'ultimate_space_battle':
                current = 2;
                break;
            case 'the_loc_nar':
                current = 1;
                break;
            case 'universe_113':
                current = 3;
                break;
        }
        const newMapPreviewNumber = current + number;
        let newMapPreviewName;
        switch (newMapPreviewNumber) {
            case 2:
                newMapPreviewName = 'ultimate_space_battle';
                break;
            case 1:
                newMapPreviewName = '_loc_nar';
                break;
            case 3:
                newMapPreviewName = 'universe_113';
                break;
        }
        setCurrentMapPreview(newMapPreviewName);
    }

    return (
        <div {...props}>
            {contentElement}
            <div className={whole}>
                <h1 className={appTitle}>Character <span className={hunt}>Hunt</span></h1>
                <div className={mapChooser}>
                    <button className={arrowButton} onClick={() => changeMapPreview(-1)}>
                        <ImArrowLeft />
                    </button>
                    <span>Choose Map</span>
                    <button className={arrowButton} onClick={() => changeMapPreview(1)}>
                        <ImArrowRight />
                    </button>
                </div>
            </div>
        </div>
    )
};

export default OverlayElementForMapSelector;