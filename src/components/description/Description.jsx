import React from 'react'
import { useParams } from 'react-router-dom';
import './description.css'
import NavBar from '../navigation/NavBar';


const Description = ({movie}) => {

  const {id} =useParams();
  const mov =movie.find(e=>e.id===id)
  return (
    <div className='backGround'>
      <NavBar/>
      
      <div className='description'>
        <div className='content-frame'>
          <iframe className='frame'width="550" height="315" src={mov.movurl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <div className='film-desc'>
          <div className='mov-name'><p>{mov.name}</p></div>
          <div className='mov-description'><p>{mov.description}</p></div>
          <div className='mov-date'>{mov.date}</div>
        </div>
      </div>
    </div>
    
  )
}

export default Description;