import React from 'react'
import { useStateValue } from '../StateProvider';
import "./CheckoutProduct.styled.css";

function CheckoutProduct({ id, title, image, price, rating }) {
  const [state, dispatch] = useStateValue();

  const removeFromBasket = (id) => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    })
  }
 
    return (
      <div className="product">
        <div className="product__info">
          <p>{title}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>🌟</p>
              ))}
          </div>
        </div>
  
        <img src={image} alt="" />
  
        <button onClick={()=>removeFromBasket(id)}>Remove From Basket</button>
      </div>
    );
  }
  
  export default CheckoutProduct;
