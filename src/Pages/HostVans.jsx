import { useState } from "react"
import VanCard from "../Components/VanCard"


export default function HostVans() {
    const [vanData] = useState(() => {
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

    

    const renderVans = vanData.map(van => (
        <VanCard key={van.id} van={van} />
    ))

  return (
    <section className="host-vans-container">
        <h3>Your listed vans</h3>

        <div className="vansaved-container">
            {vanData.length > 0 ? (
                renderVans
            ) : (
                <h4>There are no saved vans</h4>
            )}
        </div>
    </section>
)
}