import React from "react";

function Cards(props){ //Puedo hacer en vez de props, {nombre, avatar,rol} y aclaro que propiedades espera recibir//
    
        return (
            <article className="data-detail">
                <div className="card-content">
                            <h4>{props.name}</h4>
                            <p>{props.info}</p>
                            <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                </div>
            </article>
        );
    
};

export default Cards;