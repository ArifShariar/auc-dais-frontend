import React from 'react'
import "./SideBar.css"
import {Link, useLocation} from "react-router-dom";

function SideBar() {
    let currentYear = new Date().getFullYear();
    let githubLink = "https://github.com/ArifShariar/";
    let gitHubIcon = "https://img.icons8.com/bubbles/50/000000/github.png";
    const location = useLocation();
    return (
        !['/email_verification'].includes(location.pathname)?
        <div className='sidebar-container'>
            <div className ="sidenav" >
                <Link to={"addAuction"} className={"nav-link text-white"}>Add Auction</Link>
                <Link to={"liveAuctions"} className={"nav-link text-white"}>Live Auctions</Link>
                <Link to={"savedAuctions"} className={"nav-link text-white"}>Saved Auctions</Link>
                {/*<Link to={"nearbyAuctions"} className={"nav-link text-white"}>Nearby Auctions</Link>*/}
                <Link to={"wonAuctions"} className={"nav-link text-white"}>Won Auctions</Link>
                <Link to={"myAuctions"} className={"nav-link text-white"}>My Auctions</Link>
                <Link to={"history"} className={"nav-link text-white"}>History</Link>
                <Link to={"messages"} className={"nav-link text-white"}>Message</Link>
                {/*<Link to={"myRatings"} className={"nav-link text-white"}>My Ratings</Link>*/}
                <p className="nav-link text-white fixed-bottom">
                    Find us on<a href={githubLink} target="_blank" rel="noopener noreferrer"><img src={gitHubIcon} alt={"GitHub"}/></a>
                </p>
            </div>
        </div>
        :null
    );
}
export default SideBar;