import uniqid from 'uniqid';
import styles from './cmptStyles/gameplayStyles.module.css';

const { charChooserDropdown, chooserItem } = styles;

const CharChooserDropdown = ({chars, charsFound}) => {
    const charsLeft = chars.filter(char => charsFound.includes(char) ? false : true);
    const listOfCharsLeft = charsLeft.map(char => {
        return <li className={chooserItem} key={uniqid()}>{char}</li>
    });

    return (
        <ul className={charChooserDropdown}>{listOfCharsLeft}</ul>
    )
}
export default CharChooserDropdown;