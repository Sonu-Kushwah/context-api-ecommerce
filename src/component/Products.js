import React, {useContext} from 'react'
import { ProdectContent } from '../global/ProdectContent';
import { CardContext } from '../global/CardContext';
function Products() {
    const {products} = useContext(ProdectContent);
    const {dispatch} = useContext(CardContext);
    //console.log(data);

  return (
    <div className='container'>
    <div className="products">
     {
      products.map((product)=>{
        return(
          <div className='product' key={product.id}>
             <div className='product-image'>
               <img src={product.image} alt="not fount"/>
            </div>
            <div className='product-details'>
              <div className='product-name'>
                 {product.name}
              </div>
              <div className='product-price'>${product.price}.00
              </div>
              <div className='add-to-card' 
              onClick={()=>dispatch({type:"ADD_TO_CARD", id:product.id, product})}>
              add to card</div>
              {product.status === 'hot' ? <div className='hot'>Hot</div>:''}
              {product.status === 'new' ? <div className='new'>New</div>:''}
            </div>
          </div>
        )
      })
     }
    </div>
    </div>
    
  )
}

export default Products;