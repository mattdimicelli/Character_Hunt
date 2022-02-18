import styles from './cmptStyles/gameplayStyles.module.css';
import CharIcon from './CharIcon';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/material.css';
import uniqid from 'uniqid';


const {numberLeft, charIcons, charactersLeftDisplayTopDiv, tippyStyle } = styles;


const CharactersLeftDisplayForHeader = ({chars, charsFound}) => {
    const charIconListForDropdown = chars.map(char => {
        return <CharIcon key={uniqid()} dropdown={true} char={char} />
    });
    const charIconListToDisplayOnHeader = chars.map(char => {
        return <CharIcon key={uniqid()} dropdown={false} char={char} />
    });
    const numberOfCharsLeft = chars.length - charsFound.length;

    return (
        <div className={charactersLeftDisplayTopDiv}>
            <Tippy className={tippyStyle}
                trigger='click' 
                content={charIconListForDropdown}
                placement='bottom'
                theme='material'
            >
                <button className={numberLeft}>{numberOfCharsLeft}</button>
            </Tippy>

            <section className={charIcons}>{charIconListToDisplayOnHeader}</section>
        </div>
    )
}

export default CharactersLeftDisplayForHeader;