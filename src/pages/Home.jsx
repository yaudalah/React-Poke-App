import { useNavigate } from "react-router-dom";
import usePokemon from "../hooks/usePokemon";

function Home() {
const navigate = useNavigate()
const { pokemonCarts, deletePokemonFromCart } = usePokemon();

  return (
    <div className="App">
      <h1>My Pokemons</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent:"center" }}>
        {Array.from(pokemonCarts || []).map((pokemon, index) => {
          return (
            <span
              style={{
                margin: 14,
                marginBottom: 30,
                backgroundColor: '#114f79',
                padding: 10,
                borderRadius: 10,
                cursor: "pointer",
              }}
            >
              <img
                onClick={() => navigate(`/description/${pokemon?.data?.id}`)}              
                src={pokemon?.data?.sprites?.front_default}
                alt="span"
                style={{ height: 200 }}
              />
              <p key={pokemon.id} style={{ color: "white" }}>
                {pokemon?.data?.name}
              </p>
              <button
              onClick={()=>{
                deletePokemonFromCart(index)
              }}
              className="button-pokedex"
              >Delete</button>
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Home;