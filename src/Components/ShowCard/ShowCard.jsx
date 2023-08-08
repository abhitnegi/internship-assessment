import React from 'react'
import { Link } from 'react-router-dom'
import picture from '../../common/asset/1.jpg'
import './ShowCard.css'

const ShowCard = (props) => {
  const { value } = props
  let renderImage = value.show.image ? value.show.image.medium : picture 
  return (
    <div>
      <Link to={`/shows/${value.show.id}`}><div className="moviecard">
        <img src={renderImage} alt="" className='poster'/>
        <p>{value.show.name}</p>  
      </div></Link>
    </div>
  )
}

export default ShowCard
