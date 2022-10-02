import React, {createContext, useState} from 'react';

import jyoti from '../assect/jyoti.jpg';
import jyoti1 from "../assect/jyoti1.jpg";
import jyoti2 from "../assect/jyoti2.jpg";
import jyoti3 from "../assect/jyoti3.jpg";
import jyoti4 from "../assect/jyoti3.jpg";
import jyoti5 from '../assect/jyoti.jpg';
import jyoti6 from "../assect/jyoti1.jpg";
import jyoti7 from "../assect/jyoti2.jpg";

export const ProdectContent = createContext();
function ProdectContentProvider(props) {
    const [products,setProducts] =useState([
        {id:1, name: "laptop", price: 300,  image: jyoti, status: "hot"},
        {id:2, name: "hedphone", price: 300, image: jyoti1, status: "new"},
        {id:3, name: "pencle", price: 300,  image: jyoti2, status: "hot"},
        {id:4, name: "girls", price: 300,  image: jyoti3, status: "new"},
        {id:5, name: "girls", price: 300,  image: jyoti4, status: "new"},
        {id:6, name: "laptop", price: 300,  image: jyoti5, status: "hot"},
        {id:7, name: "hedphone", price: 300, image: jyoti6, status: "new"},
        {id:8, name: "pencle", price: 300,  image: jyoti7, status: "hot"}
    ]);
  return (
    <>
    <ProdectContent.Provider value={{products: [...products]}}>
    {props.children}
    </ProdectContent.Provider>
    
    
    </>
  )
}

export default ProdectContentProvider;