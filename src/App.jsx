
import { BrowserRouter,Routes ,Route } from "react-router-dom";
import { Home } from "./components/pages/Home";

function GitProfileFinder(){
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-970 to-slate-900 text-white">
      
      <BrowserRouter>
      <Routes>
        <Route path="/Home"  element={<Home/>}/>
        

        
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default GitProfileFinder 