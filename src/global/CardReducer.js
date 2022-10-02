

export const  CardReducer = (state, action) =>{
    const {shopingCard, totalPrice, qut} = state;
    let product;
    let index;
    let updatePrice;
    let updateqty;
 switch(action.type){
   case 'ADD_TO_CARD':
    //console.log('add to card case');
    const check = shopingCard.find(product =>product.id === action.id);
    if(check){
        return state;
    } else{
        product = action.product;
        product['qut'] = 1;
        updateqty = qut + 1;
        updatePrice = totalPrice + product.price;
        return {shopingCard: [product, ...shopingCard], totalPrice:
            updatePrice, qut: updateqty}   
    }
    break;
    case "INC":
        product = action.cart;
        product.qut =product.qut + 1;
        updatePrice = totalPrice + product.price;
        updateqty = qut + 1;
       index = shopingCard.findIndex(cart=>cart.id === action.id);
        shopingCard[index] = product;
        return {shopingCard: [...shopingCard], totalPrice:
            updatePrice, qut: updateqty
        }
        break;
        case "DEC":
        product = action.cart;
        if(product.qut>1){
            product.qut = product.qut - 1;
            updatePrice = totalPrice - product.price;
            updateqty = qut - 1;
            index = shopingCard.findIndex(cart =>cart.id ===action.id);
            shopingCard[index] = product;
            return{shopingCard:[...shopingCard], totalPrice:updatePrice, qut:updateqty}
        }else{
            return state;
        }
        break;
        case "DElETE":
            const filterRed = shopingCard.filter(product => product.id !== action.id)
            product = action.cart;
            updateqty = qut - product.qut;
            updatePrice = totalPrice - product.price * product.qut;
            return{shopingCard:[...filterRed], totalPrice:updatePrice, qut: updateqty}
            break;


    default:
    return state;
 }
};