// src/components/PokemonDetails/PokemonDetails.jsx
// src/components/PokemonDetails/PokemonDetails.jsx

import { useParams } from "react-router";

const PokemonDetails = (props) => {
  // Always verify that any props are being passed correctly!
  console.log(props);
  
  // destructure the object to get the number only and store it to pokemonId
  const { pokemonId } = useParams();
  console.log("pokemonId:", pokemonId);

  
  // look through the pokemon array of objects, and find the first element that matches the id
  // we are using the pokemonId we got from above to look through the prop
  // we need to use Number(pokemonId) since pokemonId is a string
  const singlePokemon = props.pokemon.find(
    (poke) => poke._id === Number(pokemonId)
  );
  // singlePokemon is an object that we got from the pokemon array
  console.log("Pokemon Object:", singlePokemon);
  return (
    <>
    <img src={singlePokemon.pic}/>
      <h2>{singlePokemon.name}</h2>
      <dl>
        <dt>{singlePokemon.weight} lbs</dt>
        <dd></dd>
        <dt>{singlePokemon.height} cm</dt>
        <dd></dd>
      </dl>
    </>
  );
};

export default PokemonDetails;
