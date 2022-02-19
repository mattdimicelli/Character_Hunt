import ReactModal from 'react-modal';
import OverlayElementforHighScores from './components/OverlayElementForHighScores';
import OverlayElementForMapSelector from './components/OverlayElementForMapSelector';
import MapSelector from './components/MapSelector';
import HighScores from './components/HighScores';
import styles from './components/cmptStyles/mapSelectorStyles.module.css';

const {modalContent, overlay} = styles;
const MapSelectorOrHighScoresInModal = ({setMap, timeElapsed, map, gameOver, 
    currentMapPreview, setCurrentMapPreview }) => {

    const overlayElement = gameOver ? 
        OverlayElementforHighScores :
        (props, contentElement) => {
            return OverlayElementForMapSelector(props, contentElement, currentMapPreview, 
                setCurrentMapPreview)
        };
    // due to how react-modal works, I found that having some code duplication in the two 
    // similiar OverlayElement files was the best solution
    
    return (
        <ReactModal isOpen={true} className={modalContent} overlayElement={overlayElement}
               overlayClassName={overlay}>
            
        // again, due to how react-modal works, styles that are
            // applied to the overlay "parent element" must be coded
            // here (cannot code into either of the OverlayElement files):
                 
            {!map && <MapSelector 
                        currentMapPreview={currentMapPreview} 
                        setMap={setMap} 
                      />}
            {gameOver && <HighScores timeElapsed={timeElapsed} />}
        </ReactModal>
    )
}

export default MapSelectorOrHighScoresInModal;