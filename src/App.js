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
import ultimate_space_battle_preview from './images/ultimate_space_battle_preview.jpg';
import { ultimateSpaceBattle } from './components/OverlayElementForMapSelector';


const { modalContent, overlay } = styles;

function App() {
  let [map, setMap] = useState(false);
  let [gameOver, setGameOver] = useState(false);
  let [timeElapsed, setTimeElapsed] = useState(0);
  // let [currentMapPreview, setCurrentMapPreview] = useState({
  //   previewImgPath: ultimate_space_battle_preview,
  //   imgAlt: 'Ultimate Space Battle by Egor Klyuchnyk',
  //   mapName: 'Ultimate Space Battle',
  //   characters: ['Bugs Bunny', 'Martian', 'Ryuk', 'Thomas the Tank Engine'],
  // });
  let [currentMapPreview, setCurrentMapPreview] = useState(ultimateSpaceBattle);

  // Initialize firebase
  const app = useFirebaseApp();  //index.js contains FirebaseAppProvider

  // initialize Firestore with the normal Firebase SKD function
  const firestore = getFirestore(app);

  return (
    <FirestoreProvider sdk={firestore}>
      <div className="App">

        {map ?
          <Gameplay map={map} timeElapsed={timeElapsed} setTimeElapsed={setTimeElapsed} />
        :
          <img src={universe_113} alt='universe_113 drawing by Egor Klyuchnyk' />
        }

        { (!map || gameOver) &&
        <ReactModal
            isOpen={true}
            className={modalContent}
            overlayElement={
            // due to how react-modal works, I found that having some code 
            // duplication in the two similiar OverlayElement files was the
            // best solution
              gameOver ? 
              OverlayElementforHighScores :
              (props, contentElement) => {
                return OverlayElementForMapSelector(
                  props, 
                  contentElement, 
                  currentMapPreview, 
                  setCurrentMapPreview
                )
              }   
            }
            // again, due to how react-modal works, styles that are
            // applied to the overlay "parent element" must be coded
            // here (cannot code into either of the OverlayElement files):
            overlayClassName={overlay}       
        >
            {!map && <MapSelector 
                        currentMapPreview={currentMapPreview} 
                        setMap={setMap} 
                      />}
            {gameOver && <HighScores timeElapsed={timeElapsed} />}
        </ReactModal>
        }
      </div>
    </FirestoreProvider>
  );
}

export default App;
