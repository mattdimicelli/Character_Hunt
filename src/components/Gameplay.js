import { useState, useEffect } from 'react';
import { followCursor } from 'tippy.js';
import Tippy from '@tippyjs/react';
import {ClockLoader } from 'react-spinners';
import { ImageMap } from '@qiuz/react-image-map';
import { css } from '@emotion/react';
import universe_113 from '../images/universe_113.jpg';
import the_loc_nar from '../images/the_loc_nar.jpg';
import ultimate_space_battle from '../images/ultimate_space_battle.jpg';
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


const { gameplayParentDiv, imageMap, ultimateImageMap, imageMapDefault } = styles;

const Gameplay = ({ map, timeElapsed, setTimeElapsed, setGameOver }) => {

    useEffect(() => {
        const timerInterval = setInterval(() => {
                setTimeElapsed(timeElapsed => timeElapsed + 1);
            }, 1000);    
        return () => clearInterval(timerInterval);
    }, []);

    const {mapName, characters: chars} = map;
    let [charsFound, setCharsFound] = useState([]);
    let [targetCharClicked, setTargetCharClicked] = useState(false);
    let [tippyDropdownInstance, setTippyDropdownInstance] = useState(null);

    const loaderCSS = css` display: block; position: fixed; top: 50vh; left: 50vw;`;

    let mapImage;
    let mapArea;
    let mapClickHandler;
    // eslint-disable-next-line default-case
    switch (mapName) {
        case 'Universe 113':
            mapImage = universe_113;
            mapArea = universe113MapArea;
            mapClickHandler = onUniverse113MapClick;
            break;
        case 'The Loc Nar':
            mapImage = the_loc_nar;
            mapArea = theLocNarMapArea;
            mapClickHandler = onTheLocNarMapClick;
            break;
        case 'Ultimate Space Battle':
            mapImage = ultimate_space_battle;
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
                    {/* since the clockLoader will get covered up by the imageMap once it finally 
                    paints to the screen, it doesn't need to be programatically removed, so the 
                    loading prop is set to a static true */}
                    <ClockLoader loading={true} css={loaderCSS} color='#FFFFFF' />
                    <ImageMap
                    src={mapImage}
                    map={mapArea}
                    onMapClick={(area, index) => mapClickHandler(setTargetCharClicked, area, index)}
                    onClick={() => setTargetCharClicked(false)}
                    className={mapName === 'Ultimate Space Battle' ? ultimateImageMap : imageMapDefault}
                    // the Ultimate Space Battle map is much wider than the 
                    // other maps.  The 'ultimateImageMap' class is applied only 
                    // to this map in order to have it appear "zoomed-in" enough
                    // for the player to be able to identify and click on the 
                    // characters
                    />
                </span>
            </Tippy>

            <Footer mapName={mapName} />
        </div>
    )
}
export default Gameplay;
