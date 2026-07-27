import { useEffect,useState  } from "react"
import { useParams} from "react-router"

export default function VanDetails(){
    const [van , setVan] = useState({})
    const param = useParams()

    const vanData = async () => {
        try{
        const response = await fetch(`/api/vans/${param.id}`)
        const data = await response.json()
        setVan(data.vans)
        console.log(data.vans)

        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{vanData()},[param.id])

     const typeColor = van.type === 'simple' 
        ? { backgroundColor: '#E17654' } 
        : van.type === 'luxury' 
        ? { backgroundColor: '#161616' } 
        : { backgroundColor: '#115E59' }

    return (
        <div className="van-details">
            <img src={van.imageUrl} alt={`${van.name} image`}/>
            <p style={typeColor}>{van.type}</p>
            <h3>{van.name}</h3>
            <span>${van.price}/day</span>
            <p>{van.description}</p>
        </div>
    )

}