import logo from './logo.svg';
import './App.css';
import { FirestoreProvider, useFirebaseApp } from 'reactfire';
import { getFirestore } from 'firebase/firestore';
import Map from './components/Map';
import MapSelector from './components/MapSelector';


function App() {

  // Initialize firebase
  const app = useFirebaseApp();  //index.js contains FirebaseAppProvider

  // initialize Firestore with the normal Firebase SKD function
  const firestore = getFirestore(app);

  return (
    <FirestoreProvider sdk={firestore}>
      <div className="App">
        <MapSelector />
        <Map />
      </div>
    </FirestoreProvider>
  );
}

export default App;
