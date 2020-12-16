import React from 'react'


const BasketItem = ({ id, image, title, price, rating }) => {
    return (
        <div className="chekoutProduct">
             <img className='chekoutProduct__image' src={image} />

             <div className='chekoutProduct__info'>
                 <p className="chekoutProduct__title">{title}</p>

                 <p className="chekoutProduct__price">
                     <span>$</span>
                     
                     <strong>{price}</strong>
                 </p>

                 <div className="chekoutProduct__rating">
                     { 
                     Array(rating)
                     .fill()
                     .map((_, i) => (
                         <p>
                            <p>🌟</p> 
                         </p>
                     ))}
                 </div>
             </div>


        </div>
    )
}

export default BasketItem
