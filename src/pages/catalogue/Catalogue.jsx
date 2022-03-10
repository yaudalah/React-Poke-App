import React, { useEffect, useState } from 'react'
import {getPokemonsDetails } from '../../services/axios'
import "./Style.css"
import "../../App.css"
import Card from '../../component/card/Card'
import { useNavigate} from 'react-router-dom'


const Catalouge = () => {
    const navigate = useNavigate();
    const [pokemon, setPokemon] = useState([]);

    useEffect(()=> {
        fetchPokeDetails();
    },[])    

    const fetchPokeDetails = async() => {
        const pokemonArray = [];
        try {
            for(let i = 1; i <= 21; i ++){
                pokemonArray.push(await getPokemonsDetails(i));
            }
            setPokemon(pokemonArray);
        } catch (error) {
            console.error(error);
        }
    }   
    
    return (
        <> 
            <h1>Catch'em</h1>
            <div className="container">
                <Card  pokemon={pokemon} navigate={navigate} />      
            </div>
        </>
    )
}


export default Catalouge