import React from 'react';
import Navbar from './components/Navbar';
import "./App.css"
import Searchbar from './components/Searchbar';
import Pokedex from './components/Pokedex';
import { getPokemonData, getPokemons , searchPokemon } from './api';

const {useState , useEffect} = React

function App() {
  const [pokemons , setPokemons] = useState([]);
  const [page , setPage] = useState(0);
  const [total , setTotal] = useState(0);
  const [loading , setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [searching, setSearching] = useState(false);

  const fetchPokemons = async () =>{
    try {
      setLoading(true);
      const data = await getPokemons(20 , 20 * page);
      const promises = data.results.map(async(pokemon)=>{
      return await getPokemonData(pokemon.url);
      })
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 20));
      setNotFound(false)

    } catch (error) {
      
    }
  }

  useEffect(() => {
    fetchPokemons();
    searchPokemon();
  } , [page]);

  const onSearch = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }
    setLoading(true);
    setNotFound(false);
    setSearching(true);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
      setLoading(false);
      return;
    } else {
      setPokemons([result]);
      setPage(0);
      setTotal(1);
    }
    setLoading(false);
    setSearching(false);
  };

  return (
    <div className="App">
      <Navbar/>
      <Searchbar onSearch={onSearch}/>
      { notFound ? (
        <div>No se encontró</div>
      )
      : (<Pokedex pokemons = {pokemons} 
        setPage={setPage}
        page={page}
        total={total}/>)
    }
    </div>
  );
}

export default App;
