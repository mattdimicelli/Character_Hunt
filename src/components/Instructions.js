import styles from './cmptStyles/mapSelectorStyles.module.css';

const {instructions, startButton } = styles;
const Instructions = ({setInstructionsAcknowledged}) => {
    return (
        <div className={instructions}>
            <h1 style={{textTransform: 'uppercase', textAlign: 'center'}}>FBI Wanted Fugitives Alert</h1>
            <h2 style={{textTransform: 'uppercase', textAlign: 'center'}}>Unlawful Flight to Avoid Prosecution - Kidnapping</h2>
            <p>The FBI is seeking information regarding several bands of fugitive pop-culture
            characters involved in the kidnapping of Waldo.  It is still unknown Where's Waldo,
            but the FBI has received reports that the fugitive bands might be in hiding in Universe 
            113, Ultimate Space Battle, and The Loc Nar.</p>
            <p>The FBI is offering a cash reward for information regarding the precise location
            of the fugitives, commensurate with the time required to do so.  The faster these 
            fugitives are brought to justice, the higher the score... err... cash reward... will be!
            </p>
            <p>Exercise extreme caution in all of the regions where the fugitives have been
            reported.  These regions have been declared by the Department of State to be seedy,
            grimy, active war zones.  Lewd activities and violence of all types are commonplace
            among the 400+ characters which inhabit them.</p>
            <button className={startButton} style={{textAlign: 'center'}} onClick={() => setInstructionsAcknowledged(true)}>
                Acknowledge
            </button>
        </div>
    )
}

export default Instructions;