import ReactModal from 'react-modal';
import MapDescription from './MapDescription';
import universe_preview from '../images/universe_113_screenshot.jpg';
import loc_preview from '../images/the_loc_nar_screenshot.jpg';
import bender from '../images/bender.png';
import catdog from '../images/catdog.webp';
import johnny_bravo from '../images/johnny2.webp';
import predator from '../images/predator.webp';
import styles from './cmptStyles/mapStyles.module.css';
import OverlayElement from './OverlayElement';

const MapSelector = () => {
    return (
        <ReactModal
            isOpen={true}
            style={{
                content: {
                    left: '20%',
                    right: '20%',
                    top: '120px',
                    borderRadius: '30px',
                    padding: '0',
                },
                overlay: {
                    // due to a quirk of how react-modal works, styles that are
                    // applied to the overlay "parent element" must be coded
                    // here (cannot code into OverlayElement.js)
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                },
            }}
            overlayElement={OverlayElement}
        >
        <img 
            className={styles.preview} 
            src={universe_preview} 
            alt="preview of Universe 113" 
        />
        <MapDescription characters={['Johnny Bravo', 'Bender', 'CatDog', 'Predator']} />
         
        </ReactModal>
    )
}

export default MapSelector;