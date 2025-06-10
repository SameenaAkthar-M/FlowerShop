import React,{useContext} from 'react'
import './birthday.css'
import PageTransition from "../components/PageTransition";
import { birthday } from '../assets/assets'
import { CartContext } from '../context/CartContext'
import { useNavigate } from 'react-router-dom';

const Birthday = () => {
    const { addToCart } = useContext(CartContext);
    const navigate=useNavigate();
  return (
    <PageTransition>
    <div className='birthday-page'>
      <div className="content-part">
        <div className="part1">
          <h1>Let's Make this BIRTHDAY a special one for your Loved One</h1>
        </div>
      </div>
      <div className="grid-container">
        {birthday.map((item,i)=>{
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

export default Birthday