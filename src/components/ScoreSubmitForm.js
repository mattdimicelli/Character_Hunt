import styles from './cmptStyles/highScoreStyles.module.css';
import { addDoc } from 'firebase/firestore';
import {useRef, useState} from 'react';

const {initialsForm, initialsInput, button} = styles;

const ScoreSubmitForm = ({scoresCollection, timeElapsed, setShowScoreSubmitForm}) => {
    let formEl = useRef(null);
    let inputEl = useRef(null);
    let [initials, setInitials] = useState('');

    function onChangeHandler(e) {
        const lettersRegex = /[A-Z]+|[a-z]+/;
        if (e.currentTarget.value.length === 0) setInitials('');
        if (e.currentTarget.value.match(lettersRegex)) {
            setInitials(e.currentTarget.value.toUpperCase());
        }
    }

    function submitHandler() {
        if(inputEl.current.checkValidity()) {
            addScoreToDB();
            setShowScoreSubmitForm(false);
        }
        else {
            inputEl.current.reportValidity();
        } 
    }

    async function addScoreToDB() {
        try {
            await addDoc(scoresCollection, {value: timeElapsed, initials: initials});
        }
        catch (err) {
            console.error(err)
        }
    }

    return (
        <form className={initialsForm} ref={formEl}>
            <label htmlFor='initials'>Enter your three initials:</label>
            <input 
                type="text" 
                id='initials' 
                className={initialsInput} 
                maxLength='3'
                placeholder='XYZ'
                value={initials}
                onChange={onChangeHandler} 
                minLength='3'
                required
                ref={inputEl}
                pattern="[A-Z][A-Z][A-Z]"
            />
            <button type="button" className={button} onClick={submitHandler}>Submit</button>
        </form>
    )
}
export default ScoreSubmitForm;