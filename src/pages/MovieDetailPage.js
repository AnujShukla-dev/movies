import React,{useState,useEffect} from 'react'
import Card from '../components'


const MovieDetailPage = () => {
   
    const getData= async ()=>{
       let  res = await fetch('http://localhost:3008/getmovies')
       let result = await res.json();
       setData(result)
      
      
       
    }
    useEffect(()=>{
        getData()
    })
   
    const [data,setData]= useState([])
    
  return (
    <div><header><h1>Movie Page</h1></header>
    <div >{
    data.length>0?
    data.map(d=><Card style={{"float":"left"}}> <h2>{d.name}</h2>
    <div>Relaese date : {d.releaseDate}</div>
    <div>Rating : {d.rating}</div></Card>):"Loading.."}</div>
    </div>
  )
}

export default MovieDetailPage