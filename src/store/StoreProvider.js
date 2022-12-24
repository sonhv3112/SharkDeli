import { useReducer } from "react";
import Reducer, { initState } from "./StoreReducer";
import { createContext } from "react";

function StoreProvider(props) { 
    const [state, dispatch] = useReducer(Reducer, initState);

    return (
        <Context.Provider value={[state, dispatch]}>
            { props.children }
        </Context.Provider>
    )
}

export const Context = createContext(initState);

export default StoreProvider; 