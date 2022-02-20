import { query, orderBy, collection, limit, addDoc } from 'firebase/firestore';
import { useFirestore, useFirestoreCollectionData  } from 'reactfire';
import { useState } from 'react';
import {ClockLoader } from 'react-spinners';
import HighScore from './HighScore';
import uniqid from 'uniqid';
import styles from './cmptStyles/highScoreStyles.module.css';
import toHHMMSS from './toHHMMSS';
import { ultimateSpaceBattle } from './OverlayElementForMapSelector';

const { rightSide, leftSide, modalContentTopDiv, scoreList, initialsInput,
    initialsForm, button, caption, time } = styles;
    
const HighScores = ({timeElapsed, setMap, setGameOver, setTimeElapsed, setCurrentMapPreview,
                        setInstructionsAcknowledged}) => {
    let [initials, setInitials] = useState('');
    

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

    async function addScoreToDB() {
        console.log('ding')

        
        try {
            await addDoc(scoresCollection, {value: timeElapsed, initials: initials});
        }
        catch (err) {
            console.error(err)
        }
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
                <form className={initialsForm}>
                    <label htmlFor='initials'>Enter your initials:</label>
                    <input 
                        type="text" 
                        id='initials' 
                        className={initialsInput} 
                        maxLength='3'
                        placeholder='XYZ'
                        value={initials}
                        onChange={(e) => setInitials(e.currentTarget.value)} 
                    />
                    <button type="button" className={button} onClick={addScoreToDB}>Submit</button>
                </form>
                <button type="button" className={button} onClick={playAgain}>Play again</button>
            </section>
        </div>
    )
}

export default HighScores;