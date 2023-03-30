import { useState } from 'react'
import reactLogo from './assets/react.svg'
import PokemonCard from './components/PokemonCard.jsx'
import './App.css'

function App(){
  
  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
  ];

  const [pokemonIndex, setpokemonIndex] = useState(0);

  const handleClick = () => {
    setIndex(index - 1);
  };

  const handleClick1 = () => {
    setIndex(index + 1);
  };

  return (
    <div>
      <PokemonCard pokemon={pomemonList[pokemonindex]} />
      {pokemonIndex > 0 ? (<button onClick={handleClick}>Previous</button>) : null}
      {pokemonIndex < pokemonList.length - 1 ? (<button onClick={handleClick1}>Next</button>) : null}
    </div>
  );
};


export default App
