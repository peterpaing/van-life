import Review from '../assets/review.png'
import Star from '../assets/stars.png'

export default function Reviews() {
    return (
        <section className="review-container">
            <h2>Your reviews <span>last 30 days</span></h2>
            <img src={Review} alt="review" />
            <div className="review-text-container">
                    <img src={Star} alt="star" />
                    <h4>Elliot <span> December 1, 2026</span></h4>
                    <p>The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!</p>
                    </div>
                    <div className="review-text-container">
                    <img src={Star} alt="star" />
                    <h4>Sandy <span> November 23, 2026</span></h4>
                    <p>This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!</p>
                    </div>
            
        </section>

    )
}
