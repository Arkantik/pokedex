function PokemonCard({pokemon}) {
       return (
        <figure>
            {/* <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="bulbasaur"/>
            <figcaption>Bulbasaur</figcaption> */}
            {pokemon.imgSrc ? (<img src={pokemon.imgSrc} alt={pokemon.name}/>) : (<p>???</p>)}
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    );
}

export default PokemonCard;
