import { IoStar } from "react-icons/io5";
import {Link} from 'react-router'

export default function Dashboard(){
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
                <h3>Your listed vans</h3>
                <Link to="/vans">View all</Link>
            </div>
        </section>
    )
}