import ReactModal from 'react-modal';
import MapDescription from './MapDescription';
import universe_preview from '../images/universe_113_screenshot.jpg';
import loc_preview from '../images/the_loc_nar_screenshot.jpg';
import bender from '../images/bender.png';
import catdog from '../images/catdog.webp';
import johnny_bravo from '../images/johnny2.webp';
import predator from '../images/predator.webp';


const MapSelector = () => {
    return (
        <ReactModal
            isOpen={true}
        >
         <img src={universe_preview} alt="preview of Universe 113" />
         <MapDescription
        </ReactModal>
    )
}

export default MapSelector;