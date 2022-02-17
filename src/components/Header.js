import styles from './cmptStyles/gameplayStyles.module.css';
import Timer from './Timer';
import CharactersLeftDisplayForHeader from './CharactersLeftDisplayForHeader';

const { header, title } = styles;

const Header = ({chars, charsFound, timeElapsed}) => {
    return (
        <header className={header}>
            <h1 className={title}>
                <div>Char</div>
                <div>Hunt</div>
            </h1>
            <Timer timeElapsed={timeElapsed}/>
            <CharactersLeftDisplayForHeader chars={chars} charsFound={charsFound} />
        </header>
    )
}

export default Header;