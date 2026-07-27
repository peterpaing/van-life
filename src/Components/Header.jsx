import { NavLink } from "react-router"
import { FaRegCircleUser } from "react-icons/fa6";

export default function Header(){
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <header>
            <h1>#VANLIFE</h1>
            <nav>
            <NavLink to="/" style={({ isActive }) => isActive ? activeStyles : undefined}>Host</NavLink>
            <NavLink to="/about" style={({ isActive }) => isActive ? activeStyles : undefined}>About</NavLink>
            <NavLink to="/vans" style={({ isActive }) => isActive ? activeStyles : undefined}>Vans</NavLink>
            <NavLink to="/login" style={({ isActive }) => isActive ? activeStyles : undefined}>
                <FaRegCircleUser className="user-icon"/>
            </NavLink>
            </nav>
        </header>
    )
}