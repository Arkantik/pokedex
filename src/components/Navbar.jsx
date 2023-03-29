import PropTypes from "prop-types";

function Navbar({pokemonIndex, setpokemonIndex, pokemonList}) {

    const handleClick = () => {
    setpokemonIndex(pokemonIndex - 1)
  };

    const handleClick1 = () => {
    setpokemonIndex(pokemonIndex + 1)
  };

    return (
        <nav>
            {pokemonIndex > 0 ? <button onClick={handleClick}>Previous</button> : null}
            {pokemonIndex < pokemonList.length -1 ? <button onClick={handleClick1}>Next</button> : null}
        </nav>
    )
};

Navbar.propTypes = {
    pokemonIndex: PropTypes.number.isRequired,
    setpokemonIndex: PropTypes.func.isRequired,
    pokemonList: PropTypes.array.isRequired,
};

export default Navbar;

