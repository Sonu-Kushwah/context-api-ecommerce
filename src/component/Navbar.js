import React, {useContext} from 'react';
import { CardContext } from '../global/CardContext';
import {Link} from "react-router-dom"
function Navbar() {
    const {qut} = useContext(CardContext)
  return (
<nav>

<ul className='left'>
<li><Link to='/'> packExpresh</Link></li>
</ul>
<ul className='right'>
<li><Link to='Cart'>
<span className='shopingCard'>{/*<i class="fas fa-card-plus"></i>*/}
<i class="fa-solid fa-cart-shopping"></i>
<span className='cardCount'>{qut}</span></span>
</Link></li>
</ul>
</nav>
  )
}

export default Navbar;