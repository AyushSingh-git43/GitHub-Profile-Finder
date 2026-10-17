import { useState } from "react"
import GitHubLogo from "../../assets/GitHub_Invertocat_White.png"


export function Home(){
    const [username,setusername]= useState("")
    const [text,setText] = useState([])

    function Search(e){

        e.preventDefault();
        console.log({username});
        setusername("");

        setText([...text,username])


    }
    return(
        <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
            <div className="flex flex-col items-center gap-4">
                <img 
                src={GitHubLogo}
                alt="GitHubLogo"
                className="w-24 h-24"
                />
                <h1 className="font-bold text-5xl">Find <span className="text-blue-700">GitHub</span> Users</h1>
                 <p className="text-gray-400 max-w-md ">Search for any GitHub username and explore their profile,repositories and more.</p>
                
                <form onSubmit={Search}
                className="flex item-center w-full mt-2 bg-[#121929] border border-slate-700/80 rounded-xl overflow-hidden focus-within:border-blue-500 transition-colors "
                >
                    <input
                    type="text"
                    placeholder="Enter GitHub UserName"
                    value={username}
                    onChange={(e)=> setusername(e.target.value)}
                    className="w-full py-3.5 bg-transparent text-white placeholder-gray-400 outline-none text-base "
                    />
                    <button type="submit"
                    className="text-white bg-blue-600 hover:bg-blue-500 font-medium px-7 py-3.5 transition-colors"
                    >Search</button>
                    
                </form>

            </div>
            </div>
    )
}