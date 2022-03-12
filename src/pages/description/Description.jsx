import { Container } from '@mui/material';
import { light } from '@mui/material/styles/createPalette';
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
          Array.from(pokemon).map((pokemon, index) =>{
            return (
              <Container className='detail-container' sx={{color: "white", display: "flex", padding: "3rem"}}>                
                
                <div style={{marginRight: "2em"}}>
                  <img className='img-poke-detail' src={pokemon?.sprites?.other.dream_world.front_default} alt='Digimon' style={{marginRight: "2em"}} />
                </div>                
                <div className="description" >
                  <h3 className='card-name' style={{marginTop: "0"}}>{pokemon.name}</h3>
                    <p>Base EXP: {pokemon.base_experience}</p>
                    <p>Weight: {pokemon.weight}</p>
                    <p>Height: {pokemon.height}</p>
                    <div>
                    <h3>Move:</h3>
                      {Array.from(pokemon?.moves || []).slice(0,5).map((item) => {
                        return <p>{item?.move?.name}</p>;
                      })}
                    </div>
                </div>
                <button className='btn-add' onClick={() => {navigate(-1)}} style={{width: "150px", backgroundColor: "rgb(138, 19, 19)"}}> Back </button>
              </Container>
            )

          })
        }
    </>
    
  )
}

export default Description