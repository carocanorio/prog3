import React from "react";

function Cards({cardname, info}) { //Puedo hacer en vez de props, {nombre, avatar,rol} y aclaro que propiedades espera recibir//
    
    return (
            <article className="data-detail">
                <div className="card-content">
                    <h4>{cardname}</h4>
                    <p>{info}</p>
                </div>
                <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
            </article>
    );
};

export default Cards;