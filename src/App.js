import { FirestoreProvider, useFirebaseApp } from 'reactfire';
import { getFirestore } from 'firebase/firestore';
import Gameplay from './components/Gameplay';
import { useState } from 'react';
import './App.css';
import universe_113 from './images/universe_113.jpg';
import { ultimateSpaceBattle } from './components/OverlayElementForMapSelector';
import MapSelectorOrHighScoresInModal from './components/MapSelectorOrHighScoresInModal';

function App() {
  let [map, setMap] = useState(false);
  let [gameOver, setGameOver] = useState(false);
  let [timeElapsed, setTimeElapsed] = useState(0);
  let [currentMapPreview, setCurrentMapPreview] = useState(ultimateSpaceBattle);

  // Initialize firebase
  const app = useFirebaseApp();  //index.js contains FirebaseAppProvider

  // initialize Firestore with the normal Firebase SKD function
  const firestore = getFirestore(app);

  return (
    <FirestoreProvider sdk={firestore}>
      <div className="App">

        { (map && !gameOver) ?
          <Gameplay map={map} timeElapsed={timeElapsed} setTimeElapsed={setTimeElapsed}
          setGameOver={setGameOver} />
        :
          <img src={universe_113} alt='universe_113 drawing by Egor Klyuchnyk' />
        }

        { (!map || gameOver) &&
          <MapSelectorOrHighScoresInModal setMap={setMap} timeElapsed={timeElapsed} 
          gameOver={gameOver} currentMapPreview={currentMapPreview} 
          setCurrentMapPreview={setCurrentMapPreview} map={map} setGameOver={setGameOver} />
        }
      </div>
    </FirestoreProvider>
  );
}

export default App;
