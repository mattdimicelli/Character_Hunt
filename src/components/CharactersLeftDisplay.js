import styles from './cmptStyles/gameplayStyles.module.css';
import CharIcon from './CharIcon';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import CharDropdown from './CharDropdown';

const {numberLeft, charIcons, charactersLeftDisplayTopDiv} = styles;


const CharactersLeftDisplay = ({charsLeft}) => {
    return (
        <div className={charactersLeftDisplayTopDiv}>
            <Tippy content={<CharDropdown charsLeft={charsLeft} />}>
                <button className={numberLeft}>{charsLeft.length}</button>
            </Tippy>

            <section className={charIcons}>
                {charsLeft.map(char => <CharIcon char={char} />)}
            </section>
        </div>
    )
}

export default CharactersLeftDisplay;