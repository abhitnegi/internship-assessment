import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getAllShows } from '../../common/slice/showSlice'
import picture from '../../common/asset/1.jpg'
import { Link } from 'react-router-dom'
import './Show.css'

const Show = () => {
    const imdbID = useParams()
    const shows = useSelector(getAllShows)
    const id = imdbID.imdbID 

    const removeTags = (text) => {
        return text.replace(/(<([^>]+)>)/gi, "")
    }
  return (
    <>
      <Link to='/'>Home</Link>
        {shows.map((value) => {
            if(value.show.id == id){
                return (
                <div className='details'>
                    <div className="left">        
                        <h1>{value.show.name}</h1>
                        <h3>Description</h3>
                        <p style={{textAlign: "left"}}>{removeTags(value.show.summary)}</p>
                        <p>Status : {value.show.status ? value.show.status : "N/A"}</p>
                        <p>Premiered : {value.show.premiered ? value.show.premiered : "N/A"}</p>
                        <p>Language : {value.show.language ? value.show.language : "N/A"}</p>
                        <p>imdb Rating : {value.show.rating.average ? value.show.rating.average : "N/A"}</p>  
                        <Link to={`/form/${value.show.id}`}>BOOKING</Link>     
                    </div>
                    <div className="right">
                        <img src={value.show.image ? value.show.image.medium : picture} alt='' />
                    </div>
                </div> )    
            }
        })} 
    </>
  )
}

export default Show
