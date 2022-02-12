import { ImArrowRight, ImArrowLeft } from 'react-icons/im';
import styles from './cmptStyles/overlayStyles.module.css';

const { whole, hunt, mapChooser, arrowButton, appTitle, mapChooserText } = styles;

const OverlayElement = (props, contentElement) => {
    return (
        <div {...props}>
            {contentElement}
            <div className={whole}>
                <h1 className={appTitle}>Character <span className={hunt}>Hunt</span></h1>
                <div className={mapChooser}>
                    <button className={arrowButton}>
                        <ImArrowLeft />
                    </button>
                    <span>Choose Map</span>
                    <button className={arrowButton}>
                        <ImArrowRight />
                    </button>
                </div>
            </div>
        </div>
    )
};

export default OverlayElement;