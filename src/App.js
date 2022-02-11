import { FirestoreProvider, useFirebaseApp } from 'reactfire';
import { getFirestore } from 'firebase/firestore';
import Map from './components/Map';
import MapSelector from './components/MapSelector';
import { useState } from 'react';


function App() {
  let [map, setMap] = useState(undefined);

  // Initialize firebase
  const app = useFirebaseApp();  //index.js contains FirebaseAppProvider

  // initialize Firestore with the normal Firebase SKD function
  const firestore = getFirestore(app);

  return (
    <FirestoreProvider sdk={firestore}>
      <div className="App">
        
        <Map />
        
        {!map && <MapSelector />}
        
      </div>
    </FirestoreProvider>
  );
}

export default App;
