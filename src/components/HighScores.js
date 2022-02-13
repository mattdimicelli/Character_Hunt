import { query, orderBy, collection, limit } from 'firebase/firestore';
import { useFirestore, useFirestoreCollectionData  } from 'reactfire';
import HighScore from './HighScore';
import { uniqid } from 'uniqid';
import styles from './cmptStyles/highScoreStyles.module.css';

const { rightSide, leftSide, modalContentTopDiv, scoreList, initialsInput,
    initialsForm, button, caption, time } = styles;
    
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
        <div className={modalContentTopDiv}>
            <figure className={leftSide}>
                <figcaption className={caption}>High Scores</figcaption>
                <ol className={scoreList}>
                    {scores.length > 0 && highScoresList}
                    <li>MRD 00:00:00</li>
                    <li>MRD 00:00:00</li>
                    <li>MRD 00:00:00</li>
                    <li>MRD 00:00:00</li>
                    <li>MRD 00:00:00</li>
                    <li>MRD 00:00:00</li>
                    <li>MRD 00:00:00</li>
                    <li>MRD 00:00:00</li>
                    <li>MRD 00:00:00</li>
                    <li>MRD 00:00:00</li>
                </ol>
            </figure>
            <section className={rightSide}>
                <figure>
                    <figcaption className={caption}>Time</figcaption>
                    <span className={time}>00:19:11</span>
                </figure>
                <form className={initialsForm}>
                    <label for='initials'>Enter your initials:</label>
                    <input 
                        type="text" 
                        id='initials' 
                        className={initialsInput} 
                        maxLength='3'
                        placeholder='XYZ' 
                    />
                    <button type="button" className={button}>Submit</button>
                </form>
                <button type="button" className={button}>Play again</button>
            </section>
        </div>
    )
}

export default HighScores;