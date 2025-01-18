// src/App.jsx

import { useState } from "react";
import PokemonList from "./components/PokemonList/PokemonList";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router";
import PokemonDetails from './components/PokemonDetails/PokemonDetails';
import PokemonForm from "./components/PokemonForm/PokemonForm";


const initialState = [
  { _id: 1, name: "bulbasaur", weight: 69, height: 7, pic:'https://img.pokemondb.net/sprites/home/normal/2x/avif/bulbasaur.avif'},
  { _id: 2, name: "ivysaur", weight: 130, height: 10, pic:'https://img.pokemondb.net/sprites/home/normal/2x/avif/ivysaur.avif'},
  { _id: 3, name: "venusaur", weight: 1000, height: 20, pic:'https://img.pokemondb.net/sprites/home/normal/2x/avif/venusaur.avif'},
  { _id: 4, name: "charmander", weight: 85, height: 6, pic:'https://img.pokemondb.net/sprites/home/normal/2x/avif/charmander.avif'},
  { _id: 5, name: "charmeleon", weight: 190, height: 11, pic:'https://img.pokemondb.net/sprites/home/normal/2x/avif/charmeleon.avif'},
];

const App = () => {
  const [pokemon, setPokemon] = useState(initialState);
  
  const addPokemon = (newPokemonData) => {
    newPokemonData._id = pokemon.length + 1;
    setPokemon([...pokemon, newPokemonData]);
  };

  return (
    <>
      
      <h1>Pokemon!</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} /> 
        <Route path="/pokemon" element={<PokemonList pokemon={pokemon} />} />
        <Route path="/pokemon/:pokemonId" element={<PokemonDetails pokemon={pokemon} />} />
        <Route path="/pokemon/new" element={<PokemonForm addPokemon={addPokemon}/>} />
        <Route path="*" element={<h2>Whoops, nothing here!</h2>} /> {/* this path  of * captures everything else that is not lsited above*/}
      </Routes>
    </>
  );
};

export default App;
