import uniqid from 'uniqid';
const CharChooserDropdown = ({charsLeft}) => {
    return (
        <ul>
            {charsLeft.map(char => <li key={uniqid()}>char</li>)}
        </ul>
    )
}
export default CharChooserDropdown;