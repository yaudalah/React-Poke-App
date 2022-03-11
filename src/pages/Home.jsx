import { useNavigate } from "react-router-dom";
import usePokemon from "../hooks/usePokemon";

function Home() {
const navigate = useNavigate()
const { pokemonCarts, deletePokemonFromCart } = usePokemon();

  return (
    <div className="App">
      <h1>My Pokemons</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {Array.from(pokemonCarts || []).map((item, index) => {
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
                onClick={() => navigate(`/catalogue/${item?.data.id}`)}              
                src={item?.data?.sprites?.front_default}
                alt="span"
                style={{ height: 200 }}
              />
              <p key={item.id} style={{ color: "white" }}>
                {item?.data?.name}
              </p>
              <button
              onClick={()=>{
                deletePokemonFromCart(index)
              }}
              >Delete</button>
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Home;