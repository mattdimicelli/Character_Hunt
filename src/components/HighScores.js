import { query, orderBy, collection, limit } from 'firebase/firestore';
import { useFirestore, useFirestoreCollectionData  } from 'reactfire';
import { useState } from 'react';
import {ClockLoader } from 'react-spinners';
import HighScore from './HighScore';
import uniqid from 'uniqid';
import styles from './cmptStyles/highScoreStyles.module.css';
import toHHMMSS from './toHHMMSS';
import { ultimateSpaceBattle } from './OverlayElementForMapSelector';
import ScoreSubmitForm from './ScoreSubmitForm';

const { rightSide, leftSide, modalContentTopDiv, scoreList, button, caption, time } = styles;
    
const HighScores = ({timeElapsed, setMap, setGameOver, setTimeElapsed, setCurrentMapPreview,
                        setInstructionsAcknowledged}) => {
    let [showScoreSubmitForm, setShowScoreSubmitForm] = useState(true);
    

     // set up query
     const firestore = useFirestore();
     const scoresCollection = collection(firestore, 'scores');
     const scoresQuery = query(scoresCollection, orderBy('value', 'asc'), limit(10));

    //ReactFire
     const { status, data: highScores } = useFirestoreCollectionData(scoresQuery);

     
     if (status === 'loading') {
         return <ClockLoader />
    }

    const highScoresList = highScores.map(score => (
        <HighScore key={uniqid()} value={score.value} initials={score.initials} />
    ));

    function playAgain() {
        setMap(false);
        setGameOver(false);
        setTimeElapsed(0);
        setCurrentMapPreview(ultimateSpaceBattle);
        setInstructionsAcknowledged(false);
    }

    return (
        <div className={modalContentTopDiv}>
            <figure className={leftSide}>
                <figcaption className={caption}>High Scores</figcaption>
                <ol className={scoreList}>
                    {highScores.length > 0 && highScoresList}
                
                </ol>
            </figure>
            <section className={rightSide}>
                <figure>
                    <figcaption className={caption}>Time</figcaption>
                    <span className={time}>{toHHMMSS(timeElapsed)}</span>
                </figure>

                {showScoreSubmitForm ? 
                    <ScoreSubmitForm scoresCollection={scoresCollection} timeElapsed={timeElapsed} 
                        setShowScoreSubmitForm={setShowScoreSubmitForm}  /> 
                    :
                    <p>Time Submitted!</p>
                }
                
                <button type="button" className={button} onClick={playAgain}>Play again</button>
            </section>
        </div>
    )
}

export default HighScores;