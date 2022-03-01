import styles from './cmptStyles/overlayStyles.module.css';

const { whole, hunt, appTitle } = styles;

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