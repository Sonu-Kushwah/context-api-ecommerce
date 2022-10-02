import React, {useContext} from 'react'
import { CardContext } from '../global/CardContext';
import StripeCheckout from 'react-stripe-checkout';
function Cart() {
  //const data = useContext(CardContext);
  //console.log(data);
  const {shopingCard, totalPrice, qut, dispatch} = useContext(CardContext);
  
  return (
    <div className='cart-container'>
    <div className='card-details' style={{margineTop: '100px'}}>
     {
      shopingCard.length > 0 ?
      shopingCard.map(cart =>(
         <div className='cart' key={cart.id}>
         <span className='cart-image'><img src={cart.image}/></span>
         <span className='cart-product-name'>{cart.name}</span>
         <span className='cart-product-price'>{cart.price}</span>
         <span className='inc' onClick={()=>dispatch({type: "INC", id:cart.id, cart})}>increment</span>
         <span className='product-quentity'>{cart.qut}</span>
         <span className='dec' onClick={()=>dispatch({type: "DEC", id:cart.id, cart})}>dec</span>
         <span className='product-totle-price'>${cart.price* cart.qut}.00</span>
         <span className='delet-product' onClick={()=>dispatch({type: "DElETE", id:cart.id, cart})}>delete</span>
         </div>
      )) :'sorry'} 
    </div>
    {shopingCard.length > 0 ?<div className='cart-summary'>
    <div className='summary'>
    <h3>cart summary</h3>
    <div className='totle-item'>
     <div className='items'>totaleitems</div>
     <div className='items-count'>{qut}</div>
    </div>
    <div className='ttle-price-section'>
    <div className='just-title'>Totleprice</div>
    <div className='items-price'>${totalPrice}.00</div>
    </div>
      <div className='strip-section'>
      <StripeCheckout>
      
      </StripeCheckout>
      </div>
    </div>
    </div>:''}
    </div>
  )
}

export default Cart;


