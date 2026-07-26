import {useState,useEffect} from 'react'
import '../sever'

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
        return (
            <div className='van-container' key={van.id}>
                <img src={van.imageUrl} alt='${van.name} image'/>
                <p>{van.name}</p>
                <span>${van.price}/day</span>
                <p>{van.type}</p>
            </div>
        )
    })

    return renderVans
}

