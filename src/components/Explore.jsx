import React,{useContext} from 'react'
import './explore.css'
import { topseller } from '../assets/assets'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { CartContext } from '../context/CartContext'
import {useNavigate} from 'react-router-dom'

const Explore = () => {

  const {addToCart}=useContext(CartContext);
  const navigate=useNavigate();
  return (
    <div className='explore' id='explore-section'>
      <h2>Top Seller</h2>
      <Swiper
  modules={[Navigation, Autoplay]}
  spaceBetween={20}
  navigation
  autoplay={{ delay: 9000, disableOnInteraction: true }}
  loop={true}
  breakpoints={{
    0: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1.2,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  }}
>

        {topseller.map((item) => (
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

export default Explore