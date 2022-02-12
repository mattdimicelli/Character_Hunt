import loc_preview from '../images/the_loc_nar_screenshot.jpg';
import bender from '../images/bender.png';
import catdog from '../images/catdog.webp';
import johnny_bravo from '../images/johnny2.webp';
import predator from '../images/predator.webp';
import styles from './cmptStyles/mapSelectorStyles.module.css';

const { charDescriptionWhole, whereCharFrom, charName } = styles;

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
    }
    
    return (
        <section className={charDescriptionWhole}>
                <img src={imgSrc} alt={character} />
                <div>
                    <h3 className={charName}>{character}</h3>
                    <p className={whereCharFrom}>{whereFrom}</p>
                </div>
        </section>
    )
}
export default CharDescription;