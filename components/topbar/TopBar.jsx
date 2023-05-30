import { Link } from "react-router-dom";
import "./topbar.css"

export default function TopBar() {
const user = false;
return (
    <div className='top'>
        <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-pinterest"></i>
        </div>

        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                    <Link className="link" to="/" >HOME</Link> 
                </li>
                <li className="topListItem"><Link className="link" to="/" >ABOUT</Link> </li>
                <li className="topListItem"><Link className="link" to="/" >CONTACT</Link> </li>
                <li className="topListItem"><Link className="link" to="/" >WRITE</Link> </li>
                <li className="topListItem"><Link className="link" to="/write" >LOGOUT</Link> 
                {user && "LOGOUT"}
                </li>

            </ul>
        </div>

        <div className="topRight">
            <img className="topImg" src="https://i.pinimg.com/564x/a2/10/da/a210da10f17f0e15dbbe861016c135d1.jpg" alt=""/>
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>

    </div>
    )
}