import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getAllShows } from '../../common/slice/showSlice'
import { Link } from 'react-router-dom'
import picture from '../../common/asset/1.jpg'
import './Form.css'

const Form = () => {
    const [ name, setName ] = useState('')  
    localStorage.setItem('name' , name)
    const imdbID = useParams()
    const shows = useSelector(getAllShows)
    const id = imdbID.imdbID 
  return (
    <>  
        <Link to='/'>Home</Link>
        {shows.map((value) => {
            if(value.show.id == id){
                return (
                <div className='form-details'>     
                    <img src={value.show.image ? value.show.image.medium : picture} alt='' />     
                    <h1>{value.show.name}</h1>
                    <h1>Username : <input type='text' onChange={(e) => setName(e.target.value)} style={{height: "4vh", fontSize: "3vh", textAlign: "center"}}/></h1>
                    <p>Status : {value.show.status ? value.show.status : "N/A"}</p>
                    <p>Premiered : {value.show.premiered ? value.show.premiered : "N/A"}</p>
                    <p>Language : {value.show.language ? value.show.language : "N/A"}</p>
                    <p>imdb Rating : {value.show.rating.average ? value.show.rating.average : "N/A"}</p>  
                </div> )    
            }
        })} 
    </>
  )
}

export default Form
