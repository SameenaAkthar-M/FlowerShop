import React from 'react'
import './success.css'
import {tick} from '../assets/assets.js'
import { useNavigate } from 'react-router-dom'
import PageTransition from "../components/PageTransition";

const Successful = () => {
  const navigate=useNavigate();
  return (
    <PageTransition>
    <div className='success-page'>
      <div className="box">
        <img src={tick} alt="" className='success-icon'/>
        <div className='msg'>
          <p className='txt'>Payment Successful!!!</p>
          <button className='success-butn' onClick={()=>navigate('/')}>Back to home</button>
        </div>
      </div>
    </div>
    </PageTransition>
  )
}

export default Successful