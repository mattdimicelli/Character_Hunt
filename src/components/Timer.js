import styles from './cmptStyles/gameplayStyles.module.css';

const {timer} = styles;
const Timer = props => {
    return (
        <div className={timer}>00:16:12</div>
    )
}

export default Timer;