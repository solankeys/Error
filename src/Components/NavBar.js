import React from 'react';
import logo from '../img/logo.png';
import './Navbar.css';

function NavBar() {
    return (
        <div className="navcomp">
            <div className="branchimg">
                <p className="pg"> Main Office:<b> Baneswor</b></p><br/>
                <img alt="restsroblogo" src={ logo } className="navlogo"/>
            </div>
            <div className="navmenu">
                <ul className="upperlinks">
                    <li><a href="/">Join your restaurant</a></li>
                    <li><a href="/">Help</a></li>
                </ul><br/>
                <ul className="navlinks">
                     <li> <a href="/"> Home</a></li>
                    <li><a href="/">Categories</a></li>
                    <li><a href="/"><i className="fas fa-book-open"></i></a></li>
                    <li><a href="/"><i className="far fa-bell"></i></a></li>
                    <span className="borderline"></span>
                    <li className="lastlist">< img alt="imgcircle" src={logo} />
                        <label className="username">John doe</label>
                        <select>
                        </select>
                    </li>
                    </ul>
            </div>
        </div>
    )
}

export default NavBar;
