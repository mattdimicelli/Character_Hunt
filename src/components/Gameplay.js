import universe_113 from '../images/universe_113.jpg';
import { ImageMap } from '@qiuz/react-image-map';
import CharChooserDropdown from './CharChooserDropdown';
import styles from './cmptStyles/gameplayStyles.module.css';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 
import { followCursor } from 'tippy.js';
import 'tippy.js/themes/material.css';
import Header from './Header';
import { universe113MapArea, onUniverse113MapClick } from './universe113Map';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './cmptStyles/stylesToOverrideDefaultToastStyles.css';

const { gameplayParentDiv, footer, footerText, imageMap } = styles;

const Gameplay = ({ selectedMap }) => {

    function keepLooking () {
        toast.error('Keep Looking!', {
            icon: false,
            theme: 'colored',
        });
    }
    
    return (
        <div className={gameplayParentDiv}>
            <Header />
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
                content={<CharChooserDropdown charsLeft={['Bender Rodriguez', 'Yautja', 'CatDog', 'Johnny Bravo']} />}
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
                        src={universe_113}
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
