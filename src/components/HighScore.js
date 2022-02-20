import toHHMMSS from './toHHMMSS';

const HighScore = ({initials, value}) => {
    return (
        <li>{initials} {toHHMMSS(value)}</li>
    );
}

export default HighScore;
