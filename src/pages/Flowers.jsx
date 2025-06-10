import React, { useState,useContext } from 'react'
import {flowersCollection} from '../assets/assets.js'
import PageTransition from "../components/PageTransition";
import './flowers.css'
import { CartContext } from '../context/CartContext'
import { useNavigate } from 'react-router-dom';

const Flowers = () => {
  const [visibleItems,setVisibleItems]=useState(12);
  const increment=12;
  const { addToCart } = useContext(CartContext);
  const navigate=useNavigate();

  return (
    <PageTransition>
    <div className='flowers-page'>
    <div className="content-part">
      <div className="part1">
        <h1>Get it for your favourite one's</h1>
      </div>
    </div>
    <div className="grid-container">
      {flowersCollection.slice(0,visibleItems).map((item,i)=>{
        return <div className="card" key={i}>
          <img src={item.image} alt="" className='card-image'/>
          <h3>{item.name}</h3>
          <p>{item.price}</p>
          <div className="butns">
            <button className='b1' onClick={() => addToCart(item)}>Add to cart</button>
            <button className='b1' onClick={()=>{
                  addToCart(item);
                  navigate('/cart')
                }}>Buy Now</button>
          </div>
        </div>
      })}
    </div>
    {visibleItems < flowersCollection.length && (
        <div className="but">
           <button className='load-more' onClick={()=>setVisibleItems((prev)=>prev+increment)}>Load More</button>
        </div>
      )}
  </div>
  </PageTransition>
  )
}

export default Flowers