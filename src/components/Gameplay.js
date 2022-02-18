import { useState, useEffect } from 'react';
import { ImageMap } from '@qiuz/react-image-map';
import { ToastContainer, toast } from 'react-toastify';
import { followCursor } from 'tippy.js';
import Tippy from '@tippyjs/react';
import universe_113 from '../images/universe_113.jpg';
import the_loc_nar from '../images/the_loc_nar.jpg';
import ultimate_space_battle from '../images/ultimate_space_battle.jpg';
import { universe113MapArea, onUniverse113MapClick } from './universe113Map';
import { onTheLocNarMapClick, theLocNarMapArea } from './theLocNarMap';
import {onUltimateSpaceBattleMapClick, ultimateSpaceBattleMapArea} from './ultimateSpaceBattleMap';
import CharChooserDropdown from './CharChooserDropdown';
import Header from './Header';
import 'tippy.js/dist/tippy.css'; 
import 'tippy.js/themes/material.css';
import styles from './cmptStyles/gameplayStyles.module.css';
import 'react-toastify/dist/ReactToastify.css';
import './cmptStyles/stylesToOverrideDefaultToastStyles.css';


const { gameplayParentDiv, footer, footerText, imageMap, ultimateMap, ultimateFooter } = styles;

const Gameplay = ({ map, timeElapsed, setTimeElapsed }) => {

    useEffect(() => {
        const timerInterval = setInterval(() => {
                setTimeElapsed(timeElapsed => timeElapsed + 1);
            }, 1000);    
    }, []);

    const {mapName, characters: chars} = map;
    let [charsFound, setCharsFound] = useState([]);

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


    function keepLooking () {
        toast.error('Keep Looking!', {
            icon: false,
            theme: 'colored',
        });
    }
    
    return (
        <div className={gameplayParentDiv}>
            <Header 
                chars={chars} 
                charsFound={charsFound} 
                timeElapsed={timeElapsed}
                mapName={mapName}
            />
            <ToastContainer
                position='top-center'
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
                limit={1}
                closeButton={false}
            />
            <Tippy
                followCursor='initial'
                content={<CharChooserDropdown chars={chars} charsFound={charsFound}/>}
                plugins={[followCursor]}
                trigger='click'
                theme='material'
                interactive='true'
            >
                {/* Normally for component elements that are children of the Tippy
                    cmpt, would have to forward ref.  Since <ImageMap> comes
                    from a library and unable to do so, workaround is wrapping
                    with the <span>  */}
                <span tabIndex='0' className={imageMap}>
                    <ImageMap
                        src={mapImage}
                        map={mapArea}
                        onMapClick={mapClickHandler}
                        onClick={keepLooking}
                        // the Ultimate Space Battle map is much wider than the 
                        // other maps.  The 'ultimateMap' class is applied only 
                        // to this map in order to have it appear "zoomed-in" enough
                        // for the player to be able to identify and click on the 
                        // characters
                        className={ 
                                mapName === 'Ultimate Space Battle' ? 
                                ultimateMap 
                                : 
                                ''}
                    />
                </span>
            </Tippy>
            <footer className={mapName === 'Ultimate Space Battle' ? ultimateFooter : footer}>
                <span className={footerText}>App by Matt Di Micelli</span>
            </footer>
        </div>
    )
}

export default Gameplay;
