import {Link} from 'react-router-dom'

const Navbar = ()=>{
    return(
    <nav className="navBar">
    <Link to="/">
        <h1> Tracker </h1>
    </Link>
    <Link to = "/add-serie">
        <p1>Add Series</p1>
    </Link>
    <Link to ="/complete">
        <p1>Complete</p1>
    </Link>
    <Link to = "/pause">
    <p1>Pause</p1>
    </Link>
    <Link to = "/airing-now">
        <p1>Airing now</p1>
    </Link>
    <Link to = "/airing-soon">
        <p1>Airing Soon</p1>
    </Link>
    <Link>
        <p1>Watching</p1>
    </Link>
    </nav>
    );


}
export default Navbar