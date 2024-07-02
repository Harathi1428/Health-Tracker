// import { NavLink } from "react-router-dom";
// import './Nav.css';
// import { useState } from "react";
// import { HiMenu } from 'react-icons/hi';

// function Nav(){
//     const [menuopen,setMenuopen]=useState(false);
//     const [dropdownOpen, setDropdownOpen] = useState(false);


//     const toggleMenu = () => {
//         setMenuopen(!menuopen);
//         setDropdownOpen(false); 
//     };
//     const toggleDropdown = () => {
//         setDropdownOpen(!dropdownOpen);
//     };


//     return(
//         <div className="navbar">
//             <div className="mainnav">
//             <div className={`nav ${menuopen ? 'menu-op':''}`}>
//                 <h4><img src={process.env.PUBLIC_URL + '/images/fit.jpg'} alt="fit"/>Health Tracker</h4>
//                 </div>
//                 <div className={`nlink ${menuopen ? 'show-menu':''}`}>
//                <li> <NavLink to="/dash" activeClassName="active" className="act1">DashBoard</NavLink></li>
//                </div>
//                <div className={`nlink ${menuopen ? 'show-menu':''}`}>
//                <li> <NavLink to="/works" activeClassName="active" className="act1">Workouts</NavLink></li>
//                </div>
//                <div className={`nlink ${menuopen ? 'show-menu':''}`}>
//                <li><NavLink to="/contact" activeClassName="active" className="act1">contact</NavLink></li>
//                </div>
//                 <div className={`nlink ${menuopen ? 'show-menu':''}`}>
//                 <button className="menu-toggle" onClick={toggleMenu}>
//                 <li><NavLink to="/" activeClassName="active" className="act1">Logout</NavLink></li>
//                 </button></div>
//                 <HiMenu className="logo" onClick={toggleDropdown}/>
//                 </div><div className="drop-main">
//                 {dropdownOpen && (
//                 <div className="drop-links">
//                 <li> <NavLink to="/dash" activeClassName="active" className="act1">DashBoard</NavLink></li>
//                 <li> <NavLink to="/works" activeClassName="active" className="act1">Workouts</NavLink></li>
//                 <li> <NavLink to="/contact" activeClassName="active" className="act1">Contact</NavLink></li>
//                 <li> <NavLink to="/" activeClassName="active" className="act1">Logout</NavLink></li>
//                 </div>
//                 )}
//             </div>
//             </div>
//     );
// }
// export default Nav;
import { NavLink } from "react-router-dom";
import './Nav.css';
import { useState } from "react";
import { HiMenu } from 'react-icons/hi';

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        setDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
        setMenuOpen(false);
    };

    return (
        <div className="navbar">
            <div className="mainnav">
                <div className="nav">
                    <h4><img src={process.env.PUBLIC_URL + '/images/fit.jpg'} alt="fit" />Health Tracker</h4>
                </div>
                <div className={`nlink ${menuOpen ? 'show-menu' : ''}`}>
                    <ul>
                        <li><NavLink to="/works" activeClassName="active" className="act1">Workouts</NavLink></li>
                        <li><NavLink to="/about" activeClassName="active" className="act1">About</NavLink></li>
                        <li><NavLink to="/contact" activeClassName="active" className="act1">Contact</NavLink></li>
                    </ul>
                </div>
                <div className={`nlink ${menuOpen ? 'show-menu' : ''}`}>
                  <button className="menu-toggle" onClick={toggleMenu}>
                                <NavLink to="/" activeClassName="active" className="act1">Logout</NavLink>
                            </button>
                </div>
                <HiMenu className="logo" onClick={toggleDropdown} />
            </div>
            {dropdownOpen && (
                <div className="drop-main">
                    <div className="drop-links">
                        <ul>
                            <li><NavLink to="/works" activeClassName="active" className="act1">Workouts</NavLink></li>
                            <li><NavLink to="/about" activeClassName="active" className="act1">About</NavLink></li>
                            <li><NavLink to="/contact" activeClassName="active" className="act1">Contact</NavLink></li>
                            <li><NavLink to="/" activeClassName="active" className="act1">Logout</NavLink></li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Nav;
