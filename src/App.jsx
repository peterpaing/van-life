import { BrowserRouter , Routes , Route } from "react-router";
import Layout  from "./Components/Layout";
import HomeLayout from "./Pages/HomeLayout";

export default function App(){

 return (
            <BrowserRouter>
            <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<HomeLayout/>}/>
            </Route>
            </Routes>
            </BrowserRouter>
    )
}