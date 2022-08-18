import React from "react";

function Categories(props) { //Puedo hacer en vez de props, {nombre, avatar,rol} y aclaro que propiedades espera recibir//
    return (
        
            <article className="card">
                <p>Category {props.numbers} </p>
            </article>
    );
};

export default Categories;