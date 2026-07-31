export default function VanCard({ van }) {
    return (
        <div className="saved-van">
            <img src={van.imageUrl} alt={`${van.name} image`} />
            <div>
                <p>{van.name}</p>
                <span>${van.price}/day</span>
            </div>
        </div>
    )
}