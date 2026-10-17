import { useState } from "react"
import GitHubLogo from "../../assets/GitHub_Invertocat_White.png"

export function Home(){
    const [username, setUsername] = useState("")
    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    async function Search(e) {
        e.preventDefault();
        if (!username.trim()) return;

        setLoading(true);
        setError("");
        setUserData(null);

        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            
            if (!response.ok) {
                throw new Error("User not found!");
            }

            const data = await response.json();
            setUserData(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
            setUsername("");
        }
    }

    return(
        <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
            <div className="flex flex-col items-center gap-4 w-full max-w-xl">
                <img 
                src={GitHubLogo}
                alt="GitHubLogo"
                className="w-24 h-24 object-contain"
                />
                <h1 className="font-bold text-4xl sm:text-5xl text-white">Find <span className="text-blue-500">GitHub</span> Users</h1>
                <p className="text-gray-400 max-w-md text-sm sm:text-base">Search for any GitHub username and explore their profile, repositories and more.</p>
                
                <form onSubmit={Search}
                className="flex items-center w-full mt-2 bg-[#121929] border border-slate-700/80 rounded-xl overflow-hidden focus-within:border-blue-500 transition-colors"
                >
                    <input
                    type="text"
                    placeholder="Enter GitHub UserName..."
                    value={username}
                    onChange={(e)=> setUsername(e.target.value)}
                    className="w-full px-4 py-3.5 bg-transparent text-white placeholder-gray-400 outline-none text-base"
                    />
                    <button type="submit"
                    className="text-white bg-blue-600 hover:bg-blue-500 font-medium px-7 py-3.5 transition-colors shrink-0"
                    >
                        {loading ? "Searching..." : "Search"}
                    </button>
                </form>

                {/* Error Message */}
                {error && <p className="text-red-500 mt-2 font-medium">{error}</p>}

                {/* User Profile Card Display */}
                {userData && (
                    <div className="w-full mt-6 bg-[#121929] border border-slate-700/80 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6 text-left">
                        <img 
                            src={userData.avatar_url} 
                            alt={userData.login} 
                            className="w-24 h-24 rounded-full border-2 border-blue-500"
                        />
                        <div className="flex flex-col gap-2 w-full">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                                <h2 className="text-xl font-bold text-white">{userData.name || userData.login}</h2>
                                <span className="text-xs text-slate-400">Joined: {new Date(userData.created_at).toLocaleDateString()}</span>
                            </div>
                            <a href={userData.html_url} target="_blank" rel="noreferrer" className="text-blue-400 text-sm hover:underline">
                                @{userData.login}
                            </a>
                            <p className="text-slate-300 text-sm">{userData.bio || "This profile has no bio."}</p>
                            
                            <div className="flex gap-4 mt-2 text-xs sm:text-sm text-slate-300 bg-slate-900/60 p-3 rounded-lg">
                                <div><strong className="text-white">{userData.public_repos}</strong> Repos</div>
                                <div><strong className="text-white">{userData.followers}</strong> Followers</div>
                                <div><strong className="text-white">{userData.following}</strong> Following</div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}