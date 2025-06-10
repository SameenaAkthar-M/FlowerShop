import React,{useContext} from 'react'
import './annivcomp.css'
import { annivSell } from '../assets/assets'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import {useNavigate} from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const AnnivComp = () => {
  const {addToCart}=useContext(CartContext);
  const navigate=useNavigate()
  return (
    <div className='anniversarySale'>
         <div className="headings">
        <h2>Anniversary</h2>
        <a onClick={()=>{
          navigate('/anniversary')
        }}>View more</a>
        </div>
        <Swiper modules={[Navigation,Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        pagination={{clickable:true}}
        autoplay={{delay:3000,
          disableOnInteraction:false
        }}
        loop={true}>
          {annivSell.map((item) => (
            <SwiperSlide key={item.id} className="card">
              <img src={item.image} alt={item.name} className="card-image"/>
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <div className="butns">
                <button className='b1' onClick={()=>addToCart(item)}>Add to cart</button>
                <button className='b1' onClick={()=>{
                  addToCart(item);
                  navigate('/cart')
                }}>Buy Now</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>  
        </div>
  )
}

export default AnnivComp