// import PropTypes from "prop-types";

function Navbar({name, pokemonIndex, setpokemonIndex}) {

    const handleClick = () => {
        setpokemonIndex(pokemonIndex)
    };

    return (<button onClick={handleClick}>{name}</button>);
}

// Navbar.propTypes = {
//     pokemonList: PropTypes.array.isRequired,
// };

export default Navbar;
