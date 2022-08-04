import React from "react";

function App() {

  let nombre = "Caro";
  let peliculas= ["Plan de Vuelo", "Only Murders in the Building", "The Dropout"];

  return (
    <div>
      <h1> Mi primera app en React</h1>
      <img src="https://definicion.de/wp-content/uploads/2009/12/paisaje-1.jpg" alt="" />
      <p> Mi nombre es {nombre}</p>
      <h2>Las últimas tres películas que vi son:</h2>
      <ul>
        {peliculas.map (pelicula => <li> {pelicula}</li>)}
      </ul>
    </div>
  );
}

export default App;
