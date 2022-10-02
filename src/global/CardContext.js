import React,{createContext,useReducer} from 'react';
import {CardReducer} from './CardReducer';

export const CardContext = createContext();
function CardContextProvider(props) {
    const [card, dispatch] = useReducer(CardReducer, {shopingCard:[], totalPrice:0, qut:0})
  return (
    <>
    <CardContext.Provider value={{...card, dispatch}}>
    {props.children}
    </CardContext.Provider>
    
    </>
  )
}

export default CardContextProvider;