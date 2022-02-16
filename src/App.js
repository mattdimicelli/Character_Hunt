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

const { modalContent, overlay } = styles;

function App() {
  let [selectedMap, setSelectedMap] = useState(false);
  let [gameOver, setGameOver] = useState(false);

  // Initialize firebase
  const app = useFirebaseApp();  //index.js contains FirebaseAppProvider

  // initialize Firestore with the normal Firebase SKD function
  const firestore = getFirestore(app);

  return (
    <FirestoreProvider sdk={firestore}>
      <div className="App">
        
        <Gameplay selectedMap={selectedMap} />

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
              OverlayElementForMapSelector  
            }
            // again, due to how react-modal works, styles that are
            // applied to the overlay "parent element" must be coded
            // here (cannot code into either of the OverlayElement files):
            overlayClassName={overlay}       
        >
            {!selectedMap && <MapSelector />}
            {gameOver && <HighScores />}
        </ReactModal>
        }
      </div>
    </FirestoreProvider>
  );
}

export default App;
