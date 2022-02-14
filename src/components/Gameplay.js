import universe_113 from '../images/universe_113.jpg';
import { ImageMap } from '@qiuz/react-image-map';
import Timer from './Timer';
import CharactersLeftDisplay from './CharactersLeftDisplay';
import styles from './cmptStyles/gameplayStyles.module.css';

const {header, title, gameplayParentDiv, footer, footerText } = styles;

const Gameplay = () => {
    const mapArea = [
        {
            // Jonny Bravo
            width: "3.5839420513515052%",
            height: "3.508771929824562%",
            left: "37.14598495594771%",
            top: "34.3653250773994%",
        },
        {
            // Cat Dog
            width: "2.4817518248175183%",
            height: "2.8895768833849327%",
            left: "30.284671087334626%",
            top: "45.09803921568628%",
        },
        {
            // Bender
            width: "1.6058394160583942%",
            height: "1.4447884416924663%",
            left: "90.13868568587478%",
            top: "69.65944272445822%",
        },
        {
            // Predator
            width: "4.233576642335766%",
            height: "3.0959752321981426%",
            left: "57.729926561787195%",
            top: "83.69453044375645%",
        }
    ];

    function onMapClick(area, index) {
        let char;
        switch (index) {
            case 0: 
                char = 'Johnny Bravo';
                break;
            case 1: 
                char = 'Cat Dog';
                break;
            case 2: 
                char = 'Bender';
                break;
            case 3:
                char = 'Predator';
                break;
            default:
                char = 'None';
        }
        console.log(char);  
    }
    
    return (
        <div className={gameplayParentDiv}>
            <header className={header}>
                <h1 className={title}>
                    <div>Char</div>
                    <div>Hunt</div>
                </h1>
                <Timer />
                <CharactersLeftDisplay charsLeft={['Bender Rodriguez', 'Yautja', 'CatDog', 'Johnny Bravo']} />
            </header>
            <ImageMap 
                src={universe_113} 
                map={mapArea} 
                onMapClick={onMapClick}
            />
            <footer className={footer}>
                <span className={footerText}>App by Matt Di Micelli</span>
            </footer>
        </div>
    )
}

export default Gameplay;
