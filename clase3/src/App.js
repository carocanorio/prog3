import React from "react";
import Menu from "./components/Menu/Menu";
import Cards from "./components/Cards/Cards";
import Categories from "./components/Categories/Categories";
import Characters from "./components/Characters/Characters";

function App() {

  let name = ['Admin', 'Pages', 'Charts', 'Tables'];
  let cardinfo = [
      {
        name: 'Products in Database',
        info: 135
      },
      {
        name: 'Amount in Products',
        info: '$645.634'
      },
      {
        name: 'Users quantity',
        info: 90
      }
    ];

    let numbers = [1, 2, 3, 4, 5, 6];

    let characterInfo = [
      {
        img: 'ahsoka.jpg',
        name: 'Ashoka',
        description: 'Character description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit voluptatem corporis vitae, eius, alias, omnis exercitationem odit officia nemo molestiae.',
        extra: 'StarWars',
    }, 
    {
        img: 'anakin.jpg',
        name: 'Anakin',
        description: 'Character description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit voluptatem corporis vitae, eius, alias, omnis exercitationem odit officia nemo molestiae.',
        extra: 'StarWars',
    },
    {
        img: 'batman.jpg',
        name: 'Batman',
        description: 'Character description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit voluptatem corporis vitae, eius, alias, omnis exercitationem odit officia nemo molestiae.',
        extra:'DC',
    },
      {
        img: 'hulkSmall.jpg',
        name: 'Hulk',
        description: 'Character description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit voluptatem corporis vitae, eius, alias, omnis exercitationem odit officia nemo molestiae.',
        extra: 'Marvel',
    },
    {
        img: 'kyloRen.jpg',
        name: 'Kylo Ren',
        description: 'Character description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit voluptatem corporis vitae, eius, alias, omnis exercitationem odit officia nemo molestiae.',
        extra: 'StarWars',
    },       
  ];

  return (
    <div>
      <nav>
        <Menu name={name}/>
        <ul className="user">
                <li>Walter White <img src="../img/user.jpg" alt=""/></li>
        </ul>
      </nav>

      <h1>My App in React</h1>
      <section className="top-data">
        {cardinfo.map((information, i) => <Cards key={information + i}name={information.name} info={information.info}/>)}
      </section>

      <h2>Categories in database</h2>
      <section className="general-data">
        {numbers.map((number, i) => <Categories key={number +i }numbers={number}/>)}
      </section>

      <h2>Personajes de películas</h2>
      <section className="card-container">
        {characterInfo.map((character, i) => <Characters key={character + i}character_name={character.name} description={character.description} image={character.img} />)}
      </section>



      <footer>
        <p>Copyright © Dashboard 2022</p>
      </footer>
    </div>
  );
}

export default App;
