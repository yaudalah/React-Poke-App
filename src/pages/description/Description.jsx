import { Container } from '@mui/material';
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
              <Container sx={{color: "white", display: "flex", padding: "5em"}}>                
                <button className='btn-add' onClick={() => {navigate(-1)}} style={{width: "200px"}}> Back</button>
                <div style={{marginRight: "2em"}}>
                  <img src={pokemon?.sprites?.other.dream_world.front_default} alt='Digimon' style={{marginRight: "2em"}} />
                </div>                
                <div className="description" >
                  <h3 className='card-name' style={{marginTop: "0"}}>{pokemon.name}</h3>
                    <p>Base EXP: {pokemon.base_experience}</p>
                    <p>Weight: {pokemon.weight}</p>
                    <p>Height: {pokemon.height}</p>
                </div>
              </Container>
            )

          })
        }
    </>
    
  )
}

export default Description