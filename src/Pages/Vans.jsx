import {useState,useEffect} from 'react'
import '../sever'
import { Link } from 'react-router'

export default function Vans(){

    const [vanData , setVanData]= useState([])

    const vans = async()=>{
    try{
         const response= await fetch('/api/vans')
       const data = await response.json()
       setVanData(data.vans)
       console.log(data)
       }catch(err){
        console.log(`fetching error : ${err}`)
       }
    }

    useEffect(()=>{vans()},[])

    

    const renderVans = vanData.map(van=>{

        const typeColor = van.type === 'simple' 
        ? { backgroundColor: '#E17654' } 
        : van.type === 'luxury' 
        ? { backgroundColor: '#161616' } 
        : { backgroundColor: '#115E59' }

        return (
            <div className='van-container' key={van.id}>
                <Link to={`/vans/${van.id}`}>
                <img src={van.imageUrl} alt={`${van.name} image`}/>
                <p>{van.name}</p>
                <span>${van.price}/day</span>
                <p className='type' style={typeColor}>{van.type}</p>
                </Link>
            </div>
        )
    })

    return (
        <section className='vans-data'>
        <h2>Explore our van options</h2>
        <div className='vans'>
        {renderVans}
        </div>
        </section>
    )
}

