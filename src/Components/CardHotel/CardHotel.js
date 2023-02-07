import React from 'react';
import{useState, useEffect} from 'react';
import { useDispatch, useSelector} from "react-redux";
import {getAllHotels} from '../../Redux/actions/hotels.js'
import './Card.css'

function Card() {
  const dispatch = useDispatch();
   const allHotels = useSelector((state) => state.allHotels);

console.log(allHotels)
  useEffect(() =>{
    dispatch(getAllHotels())
  }, [dispatch])

  return (
    <div>
     {
      allHotels?.map(el =>{
        return (
        <div  className='cardContainer' >
        <h1 className='name'>{el.name} </h1>
        <h1>{el.address}</h1>
        <h1>{el.city}</h1>
        <img src={el.image} alt='img not found' />
        </div>
        )

       
      })
     }
    </div>
  )
}

export default Card