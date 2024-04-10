import "./styling.css"
export default function Navbar(){
    return <nav className="nav">
        <a href="/Home" className="site-title">Filmic Forensics</a>
        <ul>
            <li>
                <a href="/Home">Home</a>
            </li>
            <li>
                <a href="/Genres">Genres</a>
            </li>
            <li>
                <a href="/Trending">Trending</a>
            </li>
            <li>
                <a href="/Best-Rated">Best Rated</a>
            </li>
            <li>
                <a href="/Movies">Movies</a>
            </li>
            <li>       
                <a href="/Upcoming">Upcoming Releases</a>
            </li>    
        </ul>
    </nav>
}