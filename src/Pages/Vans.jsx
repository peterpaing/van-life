import {useState,useEffect} from 'react'
import '../sever'
import { Link } from 'react-router'
import { AiOutlineLoading3Quarters } from "react-icons/ai"

export default function Vans(){

    const [vanData , setVanData]= useState([])
    const[isLoading , setIsLoading] = useState(true)
    const [typeFilter, setTypeFilter] = useState(null)

    const vans = async()=>{
        setIsLoading(true)
    try{
         const response= await fetch('/api/vans')
       const data = await response.json()
       setVanData(data.vans)
       console.log(data)
       }catch(err){
        console.log(`fetching error : ${err}`)
       }finally{
        setIsLoading(false)
       }
    }

    useEffect(()=>{vans()},[])

     const filteredVans = typeFilter
        ? vanData.filter(van => van.type === typeFilter)
        : vanData

        const getButtonStyle = (type) => {
            if (type !== typeFilter) return {}

            return type === "simple"
                ? { backgroundColor: "#E17654", color: "white" }
                : type === "luxury"
                ? { backgroundColor: "#161616", color: "white" }
                : { backgroundColor: "#115E59", color: "white" }
        }

    const renderVans = filteredVans.map(van=>{

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
        <div className="filter">
            <button style={getButtonStyle("simple")}onClick={() => setTypeFilter("simple")}>Simple</button>
            <button style={getButtonStyle("luxury")} onClick={() => setTypeFilter("luxury")}>Luxury</button>
            <button style={getButtonStyle("rugged")} onClick={() => setTypeFilter("rugged")}>Rugged</button>
           {typeFilter? <button className="clear" onClick={() => setTypeFilter(null)}>Clear filters</button>:null}
        </div>
        <div className='vans'>
        {isLoading ?<p className="loading"><AiOutlineLoading3Quarters className="spin"/>Loading...</p> : renderVans}
        </div>
        </section>
    )
}

