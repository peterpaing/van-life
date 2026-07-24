import { NavLink } from "react-router"
import { FaRegCircleUser } from "react-icons/fa6";

export default function Header(){
    return (
        <header>
            <h1>#VANLIFE</h1>
            <nav>
            <NavLink to="/">Host</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/vans">Vans</NavLink>
            <NavLink to="/login"><FaRegCircleUser className="user-icon"/></NavLink>
            </nav>
        </header>
    )
}