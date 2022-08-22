import React from 'react';

function Navbar(props){

    return (
        <nav>
            <ul className="main-nav">
                { 
                    props.elementosMenu.map((unMenu, idx)=> <li key={unMenu + idx}>{unMenu}</li>)
                    
                }
            </ul>
            <ul className="user">
                <li>Nombre usuario <img src="./img/user.jpg" alt=""/></li>
            </ul>
        </nav>
    )
}

export default Navbar