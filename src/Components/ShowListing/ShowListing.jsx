import React from 'react'
import { useSelector } from 'react-redux'
import { getAllShows } from '../../common/slice/showSlice'
import ShowCard from '../ShowCard/ShowCard'
import './ShowListing.css'

const ShowListing = () => {
    const shows = useSelector(getAllShows)
    const renderMovies = shows.map((value,i) => (
      <ShowCard value={value} key={i}/>
    ))
  return (
    <div className="movie">
      <div className='listing'>
        {renderMovies}
      </div>
    </div>
  )
}

export default ShowListing
