import { BrowserRouter , Routes , Route } from "react-router";
import Layout  from "./Components/Layout";
import HomeLayout from "./Pages/HomeLayout";
import About from "./Pages/About"
import Vans from "./Pages/Vans"

export default function App(){

 return (
            <BrowserRouter>
            <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<HomeLayout/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/vans" element={<Vans/>}/>
            </Route>
            </Routes>
            </BrowserRouter>
    )
}