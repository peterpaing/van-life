import { BrowserRouter , Routes , Route } from "react-router"
import Layout  from "./Components/Layout"
import HomeLayout from "./Pages/HomeLayout"
import About from "./Pages/About"
import Vans from "./Pages/Vans"
import VanDetails from "./Pages/VanDetails"
import Host from "./Pages/Host"
import Dashboard from "./Pages/Dashboard"
import Income from "./Pages/Income"
import HostVans from "./Pages/HostVans"
import Reviews from "./Pages/Reviews"
import Login from "./Pages/Login"

export default function App(){

 return (
           <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<HomeLayout />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetails />} />
            <Route path="login" element={<Login/>} />

            <Route path="host" element={<Host />}>
                <Route index element={<Dashboard />} />
                <Route path="income" element={<Income />} />
                <Route path="vans" element={<HostVans />} />
                <Route path="reviews" element={<Reviews />} />
            </Route>
        </Route>
    </Routes>
</BrowserRouter>
    )
}