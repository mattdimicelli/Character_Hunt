import bender from '../images/bender.png';
import catdog from '../images/catdog.webp';
import johnny_bravo from '../images/johnny2.webp';
import predator from '../images/predator.png';
import batman from '../images/batman.png';
import bugs_bunny from '../images/bugs_bunny.png';
import link from '../images/link.png';
import martian from '../images/martian.png';
import rocko from '../images/rocko.png';
import ryuk from '../images/ryuk.png';
import thomas_the_tank_engine from '../images/thomas_the_tank_engine.png';
import worm from '../images/worm.png';
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
        case 'Batman':
            imgSrc = batman;
            break;
        case 'Bugs Bunny':
            imgSrc = bugs_bunny;
            break;
        case 'Link':
            imgSrc = link;
            break;
        case 'Martian':
            imgSrc = martian;
            break;
        case 'Rocko Rama':
            imgSrc = rocko;
            break;
        case 'Ryuk':
            imgSrc = ryuk;
            break;
        case 'Thomas the Tank Engine':
            imgSrc = thomas_the_tank_engine;
            break;
        case 'Worm':
            imgSrc = worm;
            break;
    }

    return <img className={dropdown ? forDropdown : characterIcon} src={imgSrc} alt={char} />
    
}
export default CharIcon;
