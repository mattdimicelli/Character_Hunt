import { useState } from 'react';
import { ImageMap } from '@qiuz/react-image-map';
import { ToastContainer, toast } from 'react-toastify';
import { followCursor } from 'tippy.js';
import Tippy from '@tippyjs/react';
import universe_113 from '../images/universe_113.jpg';
import the_loc_nar from '../images/the_loc_nar.jpg';
import ultimate_space_battle from '../images/ultimate_space_battle.jpg';
import { universe113MapArea, onUniverse113MapClick } from './universe113Map';
import CharChooserDropdown from './CharChooserDropdown';
import Header from './Header';
import 'tippy.js/dist/tippy.css'; 
import 'tippy.js/themes/material.css';
import styles from './cmptStyles/gameplayStyles.module.css';
import 'react-toastify/dist/ReactToastify.css';
import './cmptStyles/stylesToOverrideDefaultToastStyles.css';


const { gameplayParentDiv, footer, footerText, imageMap } = styles;

const Gameplay = ({ selectedMap }) => {
    let [charsFound, setCharsFound] = useState([]);

    let chars;
    let mapImage;
    // eslint-disable-next-line default-case
    switch (selectedMap) {
        case 'universe_113':
            chars = ['Bender Rodriguez', 'Yautja', 'CatDog', 'Johnny Bravo'];
            mapImage = universe_113;
            break;
        case 'the_loc_nar':
            chars = ['Link', 'Rocko Rama', 'Worm', 'Batman'];
            mapImage = the_loc_nar;
            break;
        case 'ultimate_space_battle':
            chars = ['Bugs Bunny', 'Ruk', 'Martian', 'Thomas the Tank Engine'];
            mapImage = ultimate_space_battle;
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
            <Header chars={chars} charsFound={charsFound} />
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
                        map={universe113MapArea}
                        onMapClick={onUniverse113MapClick}
                        onClick={keepLooking}
                    />
                </span>
            </Tippy>
            <footer className={footer}>
                <span className={footerText}>App by Matt Di Micelli</span>
            </footer>
        </div>
    )
}

export default Gameplay;
