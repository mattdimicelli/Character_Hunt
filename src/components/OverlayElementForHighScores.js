import { ImArrowRight, ImArrowLeft } from 'react-icons/im';
import styles from './cmptStyles/overlayStyles.module.css';

const { whole, hunt, mapChooser, arrowButton, appTitle, mapChooserText } = styles;

const OverlayElementForHighScores = (props, contentElement) => {
    return (
        <div {...props}>
            {contentElement}
            <div className={whole}>
                <h1 className={appTitle}>Character <span className={hunt}>Hunt</span></h1>
            </div>
        </div>
    )
};

export default OverlayElementForHighScores;