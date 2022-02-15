import bender from '../images/bender.png';
import catdog from '../images/catdog.webp';
import johnny_bravo from '../images/johnny2.webp';
import predator from '../images/predator.png';
import styles from './cmptStyles/gameplayStyles.module.css';

const { characterIcon, forDropdown } = styles;

const CharIcon = ({char, dropdown}) => {
    let imgSrc;
    // eslint-disable-next-line default-case
    switch (char) {
        case 'Johnny Bravo':
            imgSrc = johnny_bravo;
            break;
        case 'CatDog':
            imgSrc = catdog;
            break;
        case 'Yautja':
            imgSrc = predator;
            break;
        case 'Bender Rodriguez':
            imgSrc = bender;
            break;
    }
    return (
        <img 
            className={dropdown ? forDropdown : characterIcon} 
            src={imgSrc} 
            alt={char} 
        />
    )
}
export default CharIcon;
