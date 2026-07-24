import Layout  from "./Components/Layout";
import { BrowserRouter , Routes , Route } from "react-router";

export default function App(){

 return (
            <BrowserRouter>
            <Routes>
            <Route path="/" element={<Layout/>}/>
            </Routes>
            </BrowserRouter>
    )
}