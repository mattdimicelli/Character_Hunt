import uniqid from 'uniqid';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import styles from './cmptStyles/gameplayStyles.module.css';

const { charChooserDropdown, chooserItem } = styles;

const CharChooserDropdown = ({chars, charsFound, targetCharClicked, setCharsFound, 
    hide: hideDropDown, setGameOver }) => {

    function keepLooking () {
        const viewportWidth = window.innerWidth;
        if (viewportWidth <= 899) {
            alert('Keep Looking!');
        } else {
            toast.error('Keep Looking!', {
                icon: false,
                theme: 'colored',
            });
        }
    }

    function showFoundToast(char) {
        const viewportWidth = window.innerWidth;
        if (viewportWidth <= 899) {
            alert (`You found ${char}!`);
        } else {
            toast.success(`You found ${char}!`, {
                icon: false,
                theme: 'colored',
            });
        }   
    }

    function clickHandler(e) {
        const char = e.currentTarget.textContent;
        if (targetCharClicked === char) {
            setCharsFound(charsFound => [...charsFound, char]);
            hideDropDown();
            showFoundToast(char);
        }
        else {
            keepLooking();
            hideDropDown();
        };
    }

    useEffect(() => {
        if (charsFound.length === 4) {
            setGameOver(true);
        }
    }, [charsFound]);

    const charsLeft = chars.filter(char => charsFound.includes(char) ? false : true);
    const listOfCharsLeft = charsLeft.map(char => {
        return <li className={chooserItem} key={uniqid()} onClick={clickHandler}>{char}</li>
    });

    return (
        <ul className={charChooserDropdown}>{listOfCharsLeft}</ul>
    )
}
export default CharChooserDropdown;