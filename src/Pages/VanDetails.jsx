import { useEffect,useState  } from "react"
import { useParams,Link} from "react-router"
import { FaArrowLeft } from "react-icons/fa"
import { AiOutlineLoading3Quarters } from "react-icons/ai"


export default function VanDetails(){
    const [van , setVan] = useState({})
    const[isLoading , setIsLoading] = useState(true)
    const param = useParams()

    const vanData = async () => {
        setIsLoading(true)
        try{
        const response = await fetch(`/api/vans/${param.id}`)
        const data = await response.json()
        setVan(data.vans)
        console.log(data.vans)

        }catch(err){
            console.log(err)
        }finally{
            setIsLoading(false)
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
            <Link to="/vans"><FaArrowLeft/>Back to all vans</Link>
            {isLoading ? <p className="loading"><AiOutlineLoading3Quarters className="spin"/>Loading...</p>
            :( 
            <>
            <img src={van.imageUrl} alt={`${van.name} image`}/>
            <p style={typeColor} className="van-type">{van.type}</p>
            <h3>{van.name}</h3>
            <span>${van.price}/day</span>
            <p>{van.description}</p>
            <button>Rent this van</button>
            </>
            )}
        </div>
    )

}