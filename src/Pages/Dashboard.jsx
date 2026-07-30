import { useState } from "react"
import { IoStar } from "react-icons/io5"
import {Link} from 'react-router'

export default function Dashboard(){
   const [savedVans, setSavedVans] = useState(() => {
    const vans = []

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        if (key && key.startsWith("van")) {
            const van = JSON.parse(localStorage.getItem(key))
            vans.push(van)
        }
    }

    return vans
})|| []

const van = savedVans.map(van => (
    <div className="saved-van" key={van.id}>
        <img src={van.imageUrl} alt={`${van.name} image`} />
        <div>
            <p>{van.name}</p>
            <span>${van.price}/day</span>
        </div>
    </div>
))

    return (
        <section className="dashboard-container">
            <div className="income">
            <h2>Welcome!</h2>
            <span>Income last 30 days</span>
            <p>$2,260</p>
            </div>
            
            <div className="rating">
               <h3>Review score</h3> 
               <span><IoStar className="star"/>5.0/5</span>
            </div>

            <div className="listed-vans">
                <div className="listed-van-headline">
                <h3>Your listed vans</h3>
                <Link to="/vans">View all</Link>
                </div>
                <div className="vansaved-container">
                {savedVans.length > 0 ? van :<h4>There is no saved vans</h4>}
                </div>
            </div>
        </section>
    )
}