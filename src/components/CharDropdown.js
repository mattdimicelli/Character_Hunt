import bender from '../images/bender.png';
import catdog from '../images/catdog.webp';
import johnny_bravo from '../images/johnny2.webp';
import predator from '../images/predator.png';

const CharDropdown = ({charsLeft}) => {
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
        <ul>
            {charsLeft.map(char => <img)}
        </ul>
    )
}
export default CharDropdown;