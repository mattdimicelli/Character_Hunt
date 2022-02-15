import styles from './cmptStyles/gameplayStyles.module.css';
import CharIcon from './CharIcon';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/material.css';
import uniqid from 'uniqid';


const {numberLeft, charIcons, charactersLeftDisplayTopDiv, tippyStyle} = styles;


const CharactersLeftDisplayForHeader = ({charsLeft}) => {
    return (
        <div className={charactersLeftDisplayTopDiv}>
            <Tippy className={tippyStyle}
                trigger='click' 
                content={charsLeft.map(char => {
                    return <CharIcon key={uniqid()} dropdown={true} char={char} />
                })}
                placement='bottom'
                theme='material'
            >
                <button className={numberLeft}>{charsLeft.length}</button>
            </Tippy>

            <section className={charIcons}>
                {charsLeft.map(char => {
                    return <CharIcon key={uniqid()} dropdown={false} char={char} />
                })}
            </section>
        </div>
    )
}

export default CharactersLeftDisplayForHeader;