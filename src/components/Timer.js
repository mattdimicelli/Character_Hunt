import styles from './cmptStyles/gameplayStyles.module.css';
import toHHMMSS from './toHHMMSS';

const {timer} = styles;
const Timer = ({timeElapsed}) => {
    
    return (
        <div className={timer}>{toHHMMSS(timeElapsed)}</div>
    )
}

export default Timer;