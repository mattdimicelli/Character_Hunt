import uniqid from 'uniqid';
import styles from './cmptStyles/gameplayStyles.module.css';

const { charChooserDropdown, chooserItem } = styles;
const CharChooserDropdown = ({chars, charsFound}) => {
    const charsLeft = chars.filter(char => charsFound.includes(char) ? false : true);
    return (
        <ul className={charChooserDropdown}>
            {charsLeft.map(char => {
             return <li className={chooserItem} key={uniqid()}>{char}</li>
            })}
        </ul>
    )
}
export default CharChooserDropdown;