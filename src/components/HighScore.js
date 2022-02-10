const HighScore = ({playerName, value}) => {
    return (
        <tr>
            <td>{playerName}</td>
            <td>{value}</td>
        </tr>
    );
}

export default HighScore;
