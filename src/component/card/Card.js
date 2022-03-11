import "./Style.css";

function Card({pokemon, navigate, addPokemonToCart}) {

    return(
        <>
            {
                pokemon.map((pokemon,index) => {
                    return (
                        <div className="card">
                            <div>
                                <span onClick={(e) => {
                                    e.preventDefault();
                                    navigate(`/description/${pokemon?.data?.id}`)
                                }}
                                >
                                    <img src={pokemon?.data?.sprites?.other.dream_world.front_default} alt="Digimon" />
                                </span>
                            </div>
                            <div className="card-name">
                                {pokemon?.data?.name}
                            </div>
                            <button 
                            className="btn-add"
                            title="add to Pokedex"
                            onClick={(e) => {
                                e.preventDefault();
                                addPokemonToCart(pokemon);
                              }}                            
                            >
                                +
                            </button>
                        </div>
                    )
                })    
            }   
        </>
    )

}

export default Card