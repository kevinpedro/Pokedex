import  { useEffect, useRef, useState } from 'react'
import { pokemonApi } from '../api/pikemonApi';
import { PokemonResponse, Result, SimplePokemon } from '../intefaces/PokemonInterfaces';

export const usePokemonPaginated = () => {
    
    const [isLoading, setisLoading] = useState(true)
    const [simplePokemons, setSimplePokemons] = useState<SimplePokemon[]>([])
    const nextpageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40')
    
    const loadPokemons = async() => {
        setisLoading(true)
        const resp = await pokemonApi.get<PokemonResponse>(nextpageUrl.current);
       nextpageUrl.current = resp.data.next;
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

        setSimplePokemons([...simplePokemons, ...newPokemonList]);
        setisLoading(false)
    }

    useEffect(() => {
      loadPokemons();
    }, [])

    return{
        isLoading,
        simplePokemons,
        loadPokemons
    }
    
}
