import { useState } from "react"
import { IoStar } from "react-icons/io5"
import { Link } from "react-router"
import VanCard from "../Components/VanCard"

export default function Dashboard() {
    const [savedVans] = useState(() => {
        const vans = []

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i)

            if (key && key.startsWith("van")) {
                const van = JSON.parse(localStorage.getItem(key))
                vans.push(van)
            }
        }

        return vans
    })

    const renderVans = savedVans.map(van => (
        <VanCard key={van.id} van={van} />
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
                <span>
                    <IoStar className="star" />
                    5.0/5
                </span>
            </div>

            <div className="listed-vans">
                <div className="listed-van-headline">
                    <h3>Your listed vans</h3>
                    <Link to="/vans">View all</Link>
                </div>

                <div className="vansaved-container">
                    {savedVans.length > 0 ? (
                        renderVans
                    ) : (
                        <h4>There are no saved vans</h4>
                    )}
                </div>
            </div>
        </section>
    )
}