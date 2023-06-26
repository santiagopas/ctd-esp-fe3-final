import { createContext, useContext, useReducer, useEffect } from "react";
import doctorsPhoto from "../../assets/helpers/doctorsPhoto";

export const initialState = {
  theme: localStorage.getItem("theme") || "light",
  data: [ ],
  favs: JSON.parse(localStorage.getItem("favs")) || [],
};

export const ContextGlobal = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'light':
      localStorage.setItem("theme", action.payload);
      return {
        ...state, theme: action.payload
      }
    case 'dark':
      localStorage.setItem("theme", action.payload);
      return {
        ...state, theme: action.payload
      }
    case 'data':
      const data = { ...state, data: action.payload }
      return data

    case 'addFav':
      localStorage.setItem('favs', JSON.stringify([...state.favs, action.payload]))
      return { ...state, favs: [...state.favs, action.payload] }

    case 'removeFav':
      const newList = state.favs.filter(d => d.id !== action.payload.id)
      localStorage.setItem('favs', JSON.stringify(newList))
      return { ...state, favs: newList }

    case 'removeAllFavs':
      localStorage.setItem('favs', '[]')
      return { ...state, favs: [] }

    default:
      throw new Error('Action type error: ' + action.type);
  }
}

export const ContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)
  const url = `https://jsonplaceholder.typicode.com/users`
  
  const getList = async () => {
    try {
      const res = await fetch(url)
      if (res.ok) {
        const data = await res.json()
        dispatch({ type: 'data', payload: data })
      } else {
        dispatch({ type: 'data', payload: res })
      }
    } catch (error) {
      dispatch({ type: 'data', payload: error })
    }
  }

  useEffect(() => {
    const favsStorage = localStorage.getItem('favs') || "[]"
    localStorage.setItem('favs', favsStorage)
    getList()
  }, [])


  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};


export const useGlobalContext = () => {
  return useContext(ContextGlobal);
}
