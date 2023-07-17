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
    </nav>
    );


}
export default Navbar