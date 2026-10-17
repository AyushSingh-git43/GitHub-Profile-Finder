
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Home } from "./components/pages/Home";
import { Navigation } from "./components/Navbar";
import { Repositories } from "./components/pages/Repositories";




function GitProfileFinder (){
  return(
    <div className=" min-h-screen w-full bg-gradient-to-tr from-slate-900 via-slate-900 to-slate-900 text-white min-h-[80vh]">
    <div>
      <BrowserRouter>
      <Navigation/>
      
      
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Repositories" element={<Repositories/>} />
      
      </Routes>

      </BrowserRouter>
    </div>
    </div>

  )
}
export default GitProfileFinder