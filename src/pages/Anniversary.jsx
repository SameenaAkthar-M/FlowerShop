import React, { useContext } from 'react'
import PageTransition from "../components/PageTransition";
import { anniversary } from '../assets/assets'
import { CartContext } from '../context/CartContext'
import './anniversary.css'

const Anniversary = () => {
  const {addToCart}=useContext(CartContext);

  return (
    <PageTransition>
    <div className='anniversary-page'>
      <div className="content-part">
        <div className="part1">
          <h1>Every Year is the Memory of craziness and upcoming adventures, Celebrate with us!!</h1>
        </div>
      </div>
      <div className="grid-container">
        {anniversary.map((item,i)=>{
          return <div className="card" key={i}>
            <img src={item.image} alt="" className='card-image'/>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <div className="butns">
              <button className='b1' onClick={()=>addToCart(item)}>Add to cart</button>
              <button className='b1' onClick={()=>{
                  addToCart(item);
                  navigate('/cart')
                }}>Buy Now</button>
            </div>
          </div>
        })}
      </div>
    </div>
    </PageTransition>
  )
}

export default Anniversary