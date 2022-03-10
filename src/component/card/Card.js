import "./Style.css"

function Card({pokemon}) {

    return(
        <>
            {
                pokemon.map(p => {
                    return (
                        <div className="card">
                            <div>
                                <img src={p.data?.sprites?.front_default} alt='Digimon' />
                            </div>
                            <div className="card-name">{p.data?.name}</div>
                            <div className="description">
                                <p>Base EXP: {p.data?.base_experience}</p>
                                <p>Weight: {p.data?.weight}</p>
                                <p>Height: {p.data?.height}</p>
                            </div>
                            <button title='Add to PokeDex'>+</button>
                        </div>
                    )
                })    
            }
        </>
    )

}

export default Card