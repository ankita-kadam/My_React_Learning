import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header =() => {

    const [btnNameReact,setbuttonNameReact]=useState("Login")

    console.log("Header render");

    return(
        <div className="header-container">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    <button 
                    className="login" 
                    onClick={()=>{
                        btnNameReact === "Login"
                            ? setbuttonNameReact("Logout")
                            : setbuttonNameReact("Login");
                    }}
                    >
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;