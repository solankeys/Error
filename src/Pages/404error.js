import React from 'react';
import NavBar from '../Components/NavBar';
import lookfood from '../img/lookfood.png';
import './404error.css';

function Error() {
    return (
        <div className="mainpage">
            <header>
            <NavBar />
            </header>
            <div>
                <div className="errormes">
                    <h1>404</h1>
                    <h2>We have a little problem here.</h2>
                    <p className="pg1"> We can't find the page you're looking for.</p>
                    <button className="backbtn">Back</button>
                    <button className="backtohomebtn">Home</button>
                </div>
                <div className="confusimg">
                    <img alt="" src={lookfood}/>
                </div>
            </div>
        </div>
    );
}

export default Error;
