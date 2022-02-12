import ReactModal from 'react-modal';
import MapDescription from './MapDescription';
import universe_preview from '../images/universe_113_screenshot.jpg';
import styles from './cmptStyles/mapSelectorStyles.module.css';
import OverlayElement from './OverlayElement';

const MapSelector = () => {
    return (
        <ReactModal
            isOpen={true}
            className={styles.modalContent}
            overlayElement={OverlayElement}
            // due to a quirk of how react-modal works, styles that are
            // applied to the overlay "parent element" must be coded
            // here (cannot code into OverlayElement.js):
            overlayClassName={styles.overlay}       
        >
            <div className={styles.modalContentTopDiv}>
                <img
                    className={styles.preview}
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
        </ReactModal>
    )
}

export default MapSelector;