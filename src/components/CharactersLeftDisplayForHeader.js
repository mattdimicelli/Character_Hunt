import styles from './cmptStyles/gameplayStyles.module.css';
import CharIcon from './CharIcon';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/material.css';
import uniqid from 'uniqid';


const {numberLeft, charIcons, charactersLeftDisplayTopDiv, tippyStyle } = styles;


const CharactersLeftDisplayForHeader = ({chars, charsFound}) => {

    const charIconListForDropdownForSmallScreens = chars.filter(char => {
        return !charsFound.includes(char)}).map(char => {
            return <CharIcon key={uniqid()} dropdown={true} char={char} />
    });

    const charIconListToDisplayOnHeaderForLargerScreens = chars.filter(char => {
        return !charsFound.includes(char)}).map(char => {
            return <CharIcon key={uniqid()} dropdown={false} char={char} />
    });
    
    const numberOfCharsLeftForSmallScreens = chars.length - charsFound.length;

    return (
        <div className={charactersLeftDisplayTopDiv}>
            <Tippy className={tippyStyle}
                trigger='click' 
                content={charIconListForDropdownForSmallScreens}
                placement='bottom'
                theme='material'
            >
                <button className={numberLeft}>{numberOfCharsLeftForSmallScreens}</button>
            </Tippy>

            <section className={charIcons}>{charIconListToDisplayOnHeaderForLargerScreens}</section>
        </div>
    )
}

export default CharactersLeftDisplayForHeader;