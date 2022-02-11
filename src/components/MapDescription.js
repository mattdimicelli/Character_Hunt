import CharDescription from './CharDescription';

const MapDescription = ({characters}) => {
    characters.map(character => <CharDescription character={character} />);
    return (
        <section>
            <h2>Universe 113</h2>
            <p>by Egor Klyuchnyk</p>
            {/* <CharDescription imgSrc={jonny_bravo}  */}
            <section>
                <img src={johnny_bravo} alt="Johnny Bravo" />
                <h3>Johnny Bravo</h3>
                <p>Johnny Bravo</p>
            </section>
            <section>
                <img src={bender} alt="Bender Rodriguez" />
                <h3>Bender Rodriguez</h3>
                <p>Futurama</p>
            </section>
            <section>
                <img src={catdog} alt="CatDog" />
                <h3>CatDog</h3>
                <p>CatDog</p>
            </section>
            <section>
                <img src={predator} alt="Alien from movie Predator" />
                <h3>Yautja</h3>
                <p>Predator</p>
            </section>
        </section>
    )
}

export default MapDescription;

