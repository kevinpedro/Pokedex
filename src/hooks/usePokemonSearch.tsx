import  { useEffect, useRef, useState } from 'react'
import { pokemonApi } from '../api/pikemonApi';
import { PokemonResponse, Result, SimplePokemon } from '../intefaces/PokemonInterfaces';

export const usePokemonSearch = () => {
    
    const [isFetching, setisFetching] = useState(true)
    const [simplePokemons, setSimplePokemons] = useState<SimplePokemon[]>([])
    
    const loadPokemons = async() => {

        const resp = await pokemonApi.get<PokemonResponse>('https://pokeapi.co/api/v2/pokemon?limit=1200');
       mapPokemonList( resp.data.results);
        
    }

    const mapPokemonList =  (pokemonList: Result[]) =>{
        const newPokemonList: SimplePokemon[] = pokemonList.map(({name, url}) =>{
            const urlParts = url.split('/');
            const id = urlParts[urlParts.length - 2] 
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
            
            return{
                id,
                picture,
                name
            }
        })

        setSimplePokemons(newPokemonList);
        setisFetching(false)
    }

    useEffect(() => {
      loadPokemons();
    }, [])

    return{
        isFetching,
        simplePokemons,
        loadPokemons
    }
    
}
