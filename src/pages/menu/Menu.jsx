import { useState } from "react";
import { appetizers, entrees, kidsMeals, desserts } from "../../data/menuData";
import MenuCard from "../../components/menu-card/MenuCard";
import "./menu.css";

function Menu() {
  const [activeCat, setActiveCat] = useState(1);

  const toggleCat = (index) => {
    setActiveCat(index);
  };

  //toggle classname based on active category
  //display menu according to active category
  return (
    <main className="menu">
      <ul className="cats">
        <li onClick={() => toggleCat(1)}>
          <div className={activeCat === 1 ? "cat active" : "cat"}>Menu</div>
        </li>
        <li onClick={() => toggleCat(2)}>
          <div className={activeCat === 2 ? "cat active" : "cat"}>
            Appetizers
          </div>
        </li>
        <li onClick={() => toggleCat(3)}>
          <div className={activeCat === 3 ? "cat active" : "cat"}>Entrees</div>
        </li>
        <li onClick={() => toggleCat(4)}>
          <div className={activeCat === 4 ? "cat active" : "cat"}>
            Kids Meals
          </div>
        </li>
        <li onClick={() => toggleCat(5)}>
          <div className={activeCat === 5 ? "cat active" : "cat"}>Desserts</div>
        </li>
      </ul>
      <div className="list-container">
        {/* If active category is all or appetizer */}
        <h2
          className={
            activeCat === 1 || activeCat === 2
              ? "cat-title-active"
              : "cat-title"
          }
        >
          Appetizers
        </h2>
        <div
          className={
            activeCat === 1 || activeCat === 2 ? "cat-list-active" : "cat-list"
          }
        >
          {appetizers.map((appetizer) => (
            <MenuCard
              img={appetizer.img}
              title={appetizer.title}
              price={appetizer.price}
              icon={appetizer.icon}
              key={appetizer.id}
            />
          ))}
        </div>
        {/* If active category is all or entree */}
        <h2
          className={
            activeCat === 1 || activeCat === 3
              ? "cat-title-active"
              : "cat-title"
          }
        >
          Entrees
        </h2>
        <div
          className={
            activeCat === 1 || activeCat === 3 ? "cat-list-active" : "cat-list"
          }
        >
          {entrees.map((entree) => (
            <MenuCard
              img={entree.img}
              title={entree.title}
              price={entree.price}
              icon={entree.icon}
              key={entree.id}
            />
          ))}
        </div>

        {/* If active category is kids meals */}
        <h2
          className={
            activeCat === 1 || activeCat === 4
              ? "cat-title-active"
              : "cat-title"
          }
        >
          Kids Meals
        </h2>
        <div
          className={
            activeCat === 1 || activeCat === 4 ? "cat-list-active" : "cat-list"
          }
        >
          {kidsMeals.map((kids) => (
            <MenuCard
              img={kids.img}
              title={kids.title}
              price={kids.price}
              icon={kids.icon}
              key={kids.id}
            />
          ))}
        </div>
        <h2
          className={
            activeCat === 1 || activeCat === 5
              ? "cat-title-active"
              : "cat-title"
          }
        >
          Desserts
        </h2>
        <div
          className={
            activeCat === 1 || activeCat === 5 ? "cat-list-active" : "cat-list"
          }
        >
          {desserts.map((dessert) => (
            <MenuCard
              img={dessert.img}
              title={dessert.title}
              price={dessert.price}
              icon={dessert.icon}
              key={dessert.id}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Menu;
