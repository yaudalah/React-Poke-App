import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getPokemonsDetails } from '../../services/axios';
import "./Style.css"

const Description = () => {

  const params = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    if (params?.id) {
      fetchPokemonDetails(params?.id);
    }
  },[params])
  

  const fetchPokemonDetails = async(id) => {
    try {
        const pokemonArray = [];
        const payload =  await getPokemonsDetails(id);
        pokemonArray.push(payload?.data);
        console.log(pokemonArray);
        setPokemon(pokemonArray);
    } catch (error) {
      console.error(error)
    }
  }
  
  return (
    <>
        {
          Array.from(pokemon).map((pokemon) =>{
            return (
              <div className='card'>                
                <h2>Detail</h2>
                <div>
                    <img src={pokemon?.data?.sprites?.other.dream_world.front_default} alt='Digimon' />
                </div>                
                <p className='card-name'>{pokemon.name}</p>
                <div className="description">
                    <p>Base EXP: {pokemon.base_experience}</p>
                    <p>Weight: {pokemon.weight}</p>
                    <p>Height: {pokemon.height}</p>

                </div>
                <button onClick={() => {navigate(-1)}}>back</button>
              </div>
            )

          })
        }
    </>
    
  )
}

export default Description