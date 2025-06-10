import React,{useContext} from 'react'
import { weddingCollection } from '../assets/assets.js'
import './wedding.css'
import { CartContext } from '../context/CartContext';
import PageTransition from "../components/PageTransition";

const Wedding = () => {
  const { addToCart } = useContext(CartContext);
  return (
    <PageTransition>
    <div className='wedding-page'>
      <div className="content-part">
        <div className="part1">
          <h1>Celebrate the new life with a blossoming flowers</h1>
        </div>
      </div>
      <div className="grid-container">
        {weddingCollection.map((item,i)=>{
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
    </div>
    </PageTransition>
  )
}

export default Wedding