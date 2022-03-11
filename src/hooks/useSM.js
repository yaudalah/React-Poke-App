import { createContext, useContext, useEffect, useReducer } from "react";

const SMStateContext = createContext();
const SMUpdaterContext = createContext();

const pokeReducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case "ADD_POKEMON_TO_CART":
      return {
        ...state,
        pokemonCarts:[...state.pokemonCarts, action.data],
      };
    case "DELETE_POKEMON_FROM_CART":
      return {
        ...state,
        pokemonCarts: state.pokemonCarts.filter((item, index) => index !== action.index)
      }      
    case "PERSIST":
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};
const reducer = (state, action) => {
  const data = pokeReducer(state, action);
  const persistData = { pokemonCarts: data.pokemonCarts };
  localStorage.setItem("persistData", JSON.stringify(persistData));
  return data;
};

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    pokemonCarts: [],
  });

  useEffect(() => {
    const data = localStorage.getItem("persistData");
    if (data) {
      dispatch({ type: "PERSIST", data: JSON.parse(data) });
    }
  }, []);

  return (
    <SMStateContext.Provider value={state}>
      <SMUpdaterContext.Provider value={dispatch}>
        {children}
      </SMUpdaterContext.Provider>
    </SMStateContext.Provider>
  );
};

export const useSMState = () => useContext(SMStateContext);

export const useSMUpdater = () => useContext(SMUpdaterContext);