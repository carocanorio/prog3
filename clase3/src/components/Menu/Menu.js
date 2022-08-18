import React from "react";

function Menu({name}) { 
    return (
            <ul className="main-nav">
                {name.map((names, i )=> <li key={names + i}>{names}</li>)}
            </ul>
    );
};

export default Menu;