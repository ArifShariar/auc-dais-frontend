import React from 'react'
import "./SideBar.css"
import {Link} from "react-router-dom";

function SideBar() {
    let currentYear = new Date().getFullYear();
    let githubLink = "https://github.com/ArifShariar/";
    let gitHubIcon = "https://img.icons8.com/bubbles/50/000000/github.png";
    return (
        <div className='sidebar-container inner1'>
            <div className ="sidenav" >
                <Link to={"addAuction"} className={"nav-link text-dark"}>Add Auction</Link>
                <Link to={"liveAuctions"} className={"nav-link text-dark"}>Live Auctions</Link>
                <Link to={"savedAuctions"} className={"nav-link text-dark"}>Saved Auctions</Link>
                <Link to={"history"} className={"nav-link text-dark"}>History</Link>
                <p className="nav-link text-dark fixed-bottom">
                    Find us on<a href={githubLink} target="_blank" rel="noopener noreferrer"><img src={gitHubIcon} alt={"GitHub"}/></a>
                </p>
            </div>
        </div>
        
    );
}
export default SideBar;