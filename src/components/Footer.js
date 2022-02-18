import styles from './cmptStyles/gameplayStyles.module.css';

const Footer = ({mapName}) => {
    const {ultimateFooter, footerText, footer } = styles;
    return (
        <footer className={mapName === 'Ultimate Space Battle' ? ultimateFooter : footer}>
            <span className={footerText}>App by Matt Di Micelli</span>
        </footer>
    )
}
export default Footer;