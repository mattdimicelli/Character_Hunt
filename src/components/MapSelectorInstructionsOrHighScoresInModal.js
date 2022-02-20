import ReactModal from 'react-modal';
import OverlayElementforHighScores from './OverlayElementForHighScores';
import OverlayElementForMapSelector from './OverlayElementForMapSelector';
import MapSelector from './MapSelector';
import HighScores from './HighScores';
import Instructions from './Instructions';
import { useState } from 'react';
import styles from './cmptStyles/mapSelectorStyles.module.css';

const {modalContent, overlay} = styles;
const MapSelectorInstructionsOrHighScoresInModal = ({setMap, timeElapsed, map, gameOver, 
    currentMapPreview, setCurrentMapPreview, setGameOver }) => {

    let [instructionsAcknowledged, setInstructionsAcknowledged] = useState(false);

    const overlayElement = (gameOver || !instructionsAcknowledged) ? 
                           OverlayElementforHighScores 
                           :
                            (props, contentElement) => {
                                return OverlayElementForMapSelector(props, contentElement, 
                                    currentMapPreview, setCurrentMapPreview)
                            };
    // due to how react-modal works, I found that having some code duplication in the two 
    // similiar OverlayElement files was the best solution
    
    return (
        <ReactModal isOpen={true} className={modalContent} overlayElement={overlayElement}
               overlayClassName={overlay}>
            
            {/* Due to how react-modal works, styles that are applied to the overlay "parent element" 
            must be coded here by applying the overlayClassName (cannot code into either of the
            OverlayElement files) */}
            {!instructionsAcknowledged && 
                <Instructions setInstructionsAcknowledged={setInstructionsAcknowledged} />
            }

            {(!map && instructionsAcknowledged) &&
                 <MapSelector currentMapPreview={currentMapPreview} setMap={setMap} />
            }

            {gameOver && <HighScores timeElapsed={timeElapsed} setMap={setMap} 
                            setGameOver={setGameOver} setCurrentMapPreview={setCurrentMapPreview}
                             setInstructionsAcknowledged={setInstructionsAcknowledged} />}
        </ReactModal>
    )
}

export default MapSelectorInstructionsOrHighScoresInModal;