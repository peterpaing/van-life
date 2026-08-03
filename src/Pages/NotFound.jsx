import {Link} from 'react-router'

export default function NotFound(){
    return (
        <section className="not-found">
            <h3>Sorry, the page you were <br/>looking for was not found.</h3>
            <Link to="/">Return to home</Link>
        </section>
    )
}