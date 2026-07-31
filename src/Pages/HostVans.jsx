import { useEffect, useState } from "react"
import VanCard from "../Components/VanCard"
import { AiOutlineLoading3Quarters } from "react-icons/ai"

export default function HostVans() {
    const [vanData, setVanData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const vans = async () => {
        setIsLoading(true)

        try {
            const response = await fetch("/api/vans")
            const data = await response.json()
            setVanData(data.vans)
        } catch (err) {
            console.log(`fetching error : ${err}`)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        vans()
    }, [])

    const renderVans = vanData.map(van => (
        <VanCard key={van.id} van={van} />
    ))

    return (
        <section className="host-vans-container">
            <h3>Your listed vans</h3>

            <div className="host-vans-list">
                {isLoading ? <p className="loading"><AiOutlineLoading3Quarters className="spin"/>Loading...</p> : renderVans}
            </div>
        </section>
    )
}