import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCount } from '../../common/slice/showSlice'
import ShowListing from '../../Components/ShowListing/ShowListing'
import { addCount, addShows } from '../../common/slice/showSlice'
import axios from 'axios'
import './Home.css'

const Home = () => {
    const setShows = useSelector(getCount)
    const [ text, setVal] = useState("");
    const [ movie, setMovie ] = useState('all')
    const dispatch = useDispatch()
    useEffect(() => {
        const show = async () => {
            const response= await axios.get(`https://api.tvmaze.com/search/shows?q=${movie}`)
            .catch((err) => {
                console.log(err);
            })
            console.log(response)
            dispatch(addCount(response.status))
            dispatch(addShows(response.data))
        }
        show()
    }, [dispatch, movie])

    const addActivity = text => {
        if(text !== ""){
          setMovie(text)
          setVal("")
        }
        else{
          alert("Search Bar is Empty")
        }
      }

  return (
    <div>
        <div className="search">
        <input type="text" placeholder='Search....' value={text} onChange={(e) => {setVal(e.target.value)}}/>
        <button onClick={
          () => addActivity(text)
        }>Search</button>
      </div>
        {setShows === 200 ? <ShowListing /> : <p>Nothing</p>}
    </div>
  )
}

export default Home
