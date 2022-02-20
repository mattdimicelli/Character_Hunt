import ReactModal from 'react-modal';
import OverlayElementforHighScores from './OverlayElementForHighScores';
import OverlayElementForMapSelector from './OverlayElementForMapSelector';
import MapSelector from './MapSelector';
import HighScores from './HighScores';
import styles from './cmptStyles/mapSelectorStyles.module.css';

const {modalContent, overlay} = styles;
const MapSelectorOrHighScoresInModal = ({setMap, timeElapsed, map, gameOver, 
    currentMapPreview, setCurrentMapPreview, setGameOver }) => {

    const overlayElement = gameOver ? 
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
            must be coded here by applying the overlayClassNAME (cannot code into either of the
            OverlayElement files) */}
                 
            {!map && <MapSelector currentMapPreview={currentMapPreview} setMap={setMap} />}

            {gameOver && <HighScores timeElapsed={timeElapsed} setMap={setMap} setGameOver={setGameOver}
                                setCurrentMapPreview={setCurrentMapPreview} />}
        </ReactModal>
    )
}

export default MapSelectorOrHighScoresInModal;