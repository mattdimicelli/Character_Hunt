import { query, orderBy, collection, limit } from 'firebase/firestore';
import { useFirestore, useFirestoreCollectionData  } from 'reactfire';
import HighScore from './HighScore';
import { uniqid } from 'uniqid';
    
const HighScores = () => {

    // set up query
    const firestore = useFirestore();
    const scoresCollection = collection(firestore, 'scores');
    const scoresQuery = query(scoresCollection, orderBy('score', 'desc'), limit(5));

    //ReactFire
    const { status, data: scores } = useFirestoreCollectionData(scoresQuery);

    if (status === 'loading') {
        return <span>loading...</span>
    } 

    const highScoresList = scores.map(score => (
        <HighScore key={uniqid()} score={score} />
    ));

    return (
        <div>
            <table>
                {scores.length > 0 && highScoresList} 
            </table>
            <input type="text" />
            <button type="button">Submit</button>
            <button type="button">Restart</button>
        </div>
    )
}

export default HighScores;