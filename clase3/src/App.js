import React from "react";
import Menu from "./components/Menu/Menu";
import Cards from "./components/Cards/Cards";
import Categories from "./components/Categories/Categories";
import Characters from "./components/Characters/Characters";

function App() {

  return (
    <div>
      <nav>
        <Menu name="ADMIN"/>
        <Menu name="Pages"/>
        <Menu name="Charts"/>
        <Menu name="Tables"/>
        <ul className="user">
                <li>Walter White <img src="../img/user.jpg" alt=""/></li>
        </ul>
      </nav>

      <h1>My App in React</h1>
      <section className="top-data">
        <Cards cardname="Products in Database" info="135"/>
        <Cards cardname="Amount in Products" info="$645.634"/>
        <Cards cardname="Users quantity" info="90"/>
      </section>

      <h2>Categories in database</h2>
      <section className="general-data">
        <Categories number="1"/>
        <Categories number="2"/>
        <Categories number="3"/>
        <Categories number="4"/>
        <Categories number="5"/>
        <Categories number="6"/>
      </section>

      <h2>Personajes de películas</h2>
      <section className="card-container">
        <Characters character_name="Hulk" description="Superhero" image="../img/hulkSmall.jpg"/>
        <Characters character_name="Batman" description="Superhero" image="../img/batman.jpg"/>
        <Characters character_name="Captain America" description="Superhero" image="../img/capAmerica.jpg"/>
        <Characters character_name="Kylo Ren" description="Superhero" image="../img/kyloren.jpg"/>
        <Characters character_name="Obi Wan Kenobi" description="Superhero" image="../img/obiWan.jpg"/>
        <Characters character_name="Superman" description="Superhero" image="../img/superman.jpg"/>
        <Characters character_name="Yoda" description="Superhero" image="../img/yoda.jpg"/>
        <Characters character_name="Doctor Strange" description="Superhero" image="../img/strange.jpg"/>
      </section>



      <footer>
        <p>Copyright © Dashboard 2022</p>
      </footer>
    </div>
  );
}

export default App;
