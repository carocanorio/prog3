import React from "react";

function Categories({number}) { //Puedo hacer en vez de props, {nombre, avatar,rol} y aclaro que propiedades espera recibir//
    return (
        
            <article className="card">
                <p>Category {number} </p>
            </article>
    );
};

export default Categories;