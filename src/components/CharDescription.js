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
import styles from './cmptStyles/mapSelectorStyles.module.css';

const { charDescriptionWhole, whereCharFrom, charName, charImg } = styles;

const CharDescription = ({character}) => {
    let imgSrc;
    let whereFrom;
    // eslint-disable-next-line default-case
    switch (character) {
        case 'Johnny Bravo':
            imgSrc = johnny_bravo;
            whereFrom = character;
            break;
        case 'CatDog':
            imgSrc = catdog;
            whereFrom = character;
            break;
        case 'Yautja':
            imgSrc = predator;
            whereFrom = 'Predator';
            break;
        case 'Bender Rodriguez':
            imgSrc = bender;
            whereFrom = 'Futurama';
            break;
        case 'Batman':
            imgSrc = batman;
            whereFrom = 'Batman';
            break;
        case 'Bugs Bunny':
            imgSrc = bugs_bunny;
            whereFrom = 'Looney Toons';
            break;
        case 'Link':
            imgSrc = link;
            whereFrom = 'The Legend of Zelda';
            break;
        case 'Martian':
            imgSrc = martian;
            whereFrom = 'War of the Worlds';
            break;
        case 'Rocko Rama':
            imgSrc = rocko;
            whereFrom = "Rocko's Modern Life";
            break;
        case 'Ryuk':
            imgSrc = ryuk;
            whereFrom = 'Death Note';
            break;
        case 'Thomas the Tank Engine':
            imgSrc = thomas_the_tank_engine;
            whereFrom = 'Thomas the Tank Engine';
            break;
        case 'Worm':
            imgSrc = worm;
            whereFrom = 'Worms';
            break;
    }
    
    return (
        <section className={charDescriptionWhole}>
                <img className={charImg} src={imgSrc} alt={character} />
                <div>
                    <h3 className={charName}>{character}</h3>
                    <p className={whereCharFrom}>{whereFrom}</p>
                </div>
        </section>
    )
}
export default CharDescription;