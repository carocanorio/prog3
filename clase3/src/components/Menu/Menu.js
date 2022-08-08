import React from "react";

function Menu({name}) { 
    return (
            <ul className="main-nav">
                <li>{name}</li>
            </ul>
    );
};

export default Menu;