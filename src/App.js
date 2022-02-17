import { FirestoreProvider, useFirebaseApp } from 'reactfire';
import { getFirestore } from 'firebase/firestore';
import Gameplay from './components/Gameplay';
import MapSelector from './components/MapSelector';
import HighScores from './components/HighScores';
import { useState } from 'react';
import './App.css';
import styles from './components/cmptStyles/mapSelectorStyles.module.css';
import OverlayElementForMapSelector from './components/OverlayElementForMapSelector';
import OverlayElementforHighScores from './components/OverlayElementForHighScores';
import ReactModal from 'react-modal';
import universe_113 from './images/universe_113.jpg';


const { modalContent, overlay } = styles;

function App() {
  let [selectedMap, setSelectedMap] = useState(false);
  let [gameOver, setGameOver] = useState(false);
  let [timeElapsed, setTimeElapsed] = useState(0);
  let [currentMapPreview, setCurrentMapPreview] = useState(2);

  // Initialize firebase
  const app = useFirebaseApp();  //index.js contains FirebaseAppProvider

  // initialize Firestore with the normal Firebase SKD function
  const firestore = getFirestore(app);

  return (
    <FirestoreProvider sdk={firestore}>
      <div className="App">

        {selectedMap ?
          <Gameplay selectedMap={selectedMap} timeElapsed={timeElapsed} />
        :
          <img src={universe_113} alt='universe_113 drawing by Egor Klyuchnyk' />
        }

        { (!selectedMap || gameOver) &&
        <ReactModal
            isOpen={true}
            className={modalContent}
            overlayElement={
            // due to how react-modal works, I found that having some code 
            // duplication in the two similiar OverlayElement files was the
            // best solution
              gameOver ? 
              OverlayElementforHighScores :
              (props, contentElement) => OverlayElementForMapSelector(props, contentElement, currentMapPreview, setCurrentMapPreview)  
            }
            // again, due to how react-modal works, styles that are
            // applied to the overlay "parent element" must be coded
            // here (cannot code into either of the OverlayElement files):
            overlayClassName={overlay}       
        >
            {!selectedMap && <MapSelector currentMapPreview={currentMapPreview} />}
            {gameOver && <HighScores timeElapsed={timeElapsed} />}
        </ReactModal>
        }
      </div>
    </FirestoreProvider>
  );
}

export default App;
