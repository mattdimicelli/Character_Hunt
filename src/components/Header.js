import styles from './cmptStyles/gameplayStyles.module.css';
import Timer from './Timer';
import CharactersLeftDisplayForHeader from './CharactersLeftDisplayForHeader';

const { header, title } = styles;

const Header = () => {
    return (
        <header className={header}>
            <h1 className={title}>
                <div>Char</div>
                <div>Hunt</div>
            </h1>
            <Timer />
            <CharactersLeftDisplayForHeader charsLeft={['Bender Rodriguez', 'Yautja', 'CatDog', 'Johnny Bravo']} />
        </header>
    )
}

export default Header;