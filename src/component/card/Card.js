import "./Style.css"

function Card({pokemon, navigate}) {

    return(
        <>
            {
                pokemon.map(pokemon => {
                    return (
                        <div className="card">
                            <div>
                                <span onClick={() => {
                                    navigate(`/description/${pokemon?.data?.id}`)
                                }}
                                >
                                    <img src={pokemon?.data?.sprites?.front_default} alt='Digimon' />
                                </span>
                            </div>
                            <div className="card-name">
                                {pokemon?.data?.name}
                            </div>
                            <button className="btn-add" title="add to Pokedex">
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