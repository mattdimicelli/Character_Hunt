import { useState, useEffect } from 'react';
import { followCursor } from 'tippy.js';
import Tippy from '@tippyjs/react';
import { ImageMap } from '@qiuz/react-image-map';
import universe_113 from '../images/universe_113.jpg';
import the_loc_nar from '../images/the_loc_nar.jpg';
import ultimate_space_battle from '../images/ultimate_space_battle.jpg';
import clock from '../images/clock2.gif';
import { universe113MapArea, onUniverse113MapClick } from './universe113Map';
import { onTheLocNarMapClick, theLocNarMapArea } from './theLocNarMap';
import {onUltimateSpaceBattleMapClick, ultimateSpaceBattleMapArea} from './ultimateSpaceBattleMap';
import CharChooserDropdown from './CharChooserDropdown';
import MyToastContainer from './MyToastContainer';
import Header from './Header';
import Footer from './Footer';
import 'tippy.js/dist/tippy.css'; 
import 'tippy.js/themes/material.css';
import styles from './cmptStyles/gameplayStyles.module.css';
import 'react-toastify/dist/ReactToastify.css';
import './cmptStyles/stylesToOverrideDefaultToastStyles.css';


const { gameplayParentDiv, imageMap, ultimateImageMap, imageMapDefault, loadingClock } = styles;

const Gameplay = ({ map, timeElapsed, setTimeElapsed, setGameOver }) => {

    const {mapName, characters: chars} = map;
    let [charsFound, setCharsFound] = useState([]);
    let [targetCharClicked, setTargetCharClicked] = useState(false);
    let [tippyDropdownInstance, setTippyDropdownInstance] = useState(null);
    let [imgMapSrc, setImgMapSrc] = useState(clock);
    let [imgMapClass, setImgMapClass] = useState(loadingClock);

    useEffect(() => {
        const timerInterval = setInterval(() => {
                setTimeElapsed(timeElapsed => timeElapsed + 1);
            }, 1000);    
        return () => clearInterval(timerInterval);
    }, [imgMapSrc]);
    // the timer will only start to count once the map image has painted to the screen.  otherwise, 
    // it would be counting while the player would be waiting for it to load

    let mapImage = new Image();  // the <img /> element is created but it itself is not rendered to 
    // the DOM.  It is created soley because when the image is done loading, it will fire the onload
    // event, at which time the ImageMap's src attribute can be set to the mapImages's src. Until 
    // then, ImageMap will display a loading image.  Unfortunately this functionality (the onload 
    // event listening) cannot implented via the ImageMap alone
    let mapArea;
    let mapClickHandler;
    // eslint-disable-next-line default-case
    switch (mapName) {
        case 'Universe 113':
            mapImage.src = universe_113;
            mapImage.onload = () => {
                setImgMapSrc(universe_113);
                setImgMapClass(imageMapDefault);
            }
            mapArea = universe113MapArea;
            mapClickHandler = onUniverse113MapClick;
            break;
        case 'The Loc Nar':
            mapImage.src = the_loc_nar;
            mapImage.onload = () => {
                setImgMapSrc(the_loc_nar);
                setImgMapClass(imageMapDefault);
            }
            mapArea = theLocNarMapArea;
            mapClickHandler = onTheLocNarMapClick;
            break;
        case 'Ultimate Space Battle':
            mapImage.src = ultimate_space_battle;
            mapImage.onload = () => {
                setImgMapSrc(ultimate_space_battle);
                setImgMapClass(ultimateImageMap);
                // the Ultimate Space Battle map is much wider than the other maps.  The 
                // 'ultimateImageMap' class is applied only to this map in order to have it appear 
                // "zoomed-in" enough for the player to be able to identify and click on the 
                // characters
            }
            mapArea = ultimateSpaceBattleMapArea;
            mapClickHandler = onUltimateSpaceBattleMapClick;
            break;
    }

    
    return (
        <div className={gameplayParentDiv}>

            <Header 
                chars={chars} 
                charsFound={charsFound} 
                timeElapsed={timeElapsed}
                mapName={mapName}
            />

            <MyToastContainer />
            
            <Tippy
                followCursor='initial'
                content={tippyDropdownInstance ? <CharChooserDropdown 
                            chars={chars} 
                            charsFound={charsFound} 
                            targetCharClicked={targetCharClicked}
                            setCharsFound={setCharsFound}
                            setGameOver={setGameOver}
                            hide={tippyDropdownInstance.hide}
                        /> : ''}
                plugins={[followCursor]}
                trigger='click'
                theme='material'
                interactive='true'
                onCreate={setTippyDropdownInstance}
            >
            {/* Normally for component elements that are children of the Tippy cmpt, would have to 
            forward ref.  Since <ImageMap> comes from a library and unable to do so, workaround is 
            wrapping with the <span>  */}
                <span tabIndex='0' className={imageMap}>
                    <ImageMap
                    src={imgMapSrc}
                    map={mapArea}
                    onMapClick={(area, index) => mapClickHandler(setTargetCharClicked, area, index)}
                    onClick={() => setTargetCharClicked(false)}
                    className={imgMapClass}
                    />
                </span>
            </Tippy>

            <Footer mapName={mapName} />
        </div>
    )
}
export default Gameplay;
