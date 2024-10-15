import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// src/App.jsx

const App = () => {
  // const team = [];
  // const money = 100;
  const zombieFighters = [
    {
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://via.placeholder.com/150/92c952",
    },
    {
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://via.placeholder.com/150/771796",
    },
    {
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://via.placeholder.com/150/24f355",
    },
    {
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/d32776",
    },
    {
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://via.placeholder.com/150/1ee8a4",
    },
    {
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://via.placeholder.com/150/66b7d2",
    },
    {
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://via.placeholder.com/150/56acb2",
    },
    {
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://via.placeholder.com/150/8985dc",
    },
    {
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://via.placeholder.com/150/392537",
    },
    {
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/602b9e",
    },
  ];
  const [fighter, setFighter] = useState(zombieFighters);
  const [team, setTeam] = useState(["Pick some team members!"]);
  const [money, setMoney] = useState(100);

  const handleAddFighter = (team) => {
    setTeam((prevState) => [...prevState, JSON.stringify(team)]);
    // setFighter((prevState) => {
    //   return [...prevState, { fighter, idx }];
    // if (fighter.price <= money) {
    //   money -= fighter.price;
    // } else {
    //   ("Not enough money");
    // }
  };

  const handleMoney = (money) => {
    setMoney((prevState) => prevState - money);
  };

  return (
    <div>
      <div>
        <h1>Zombie Fighters</h1>
        <section>Money: {money}</section>
        <section>Team Strength: </section>
        <section>Team Agility: </section>
        <div type="text" placeholder="" value={team}>
          Team: {team}
        </div>
      </div>

      <div>
        {zombieFighters.map((item, idx) => {
          return (
            <ul key={idx}>
              <li>
                <img src={item.img} />
              </li>
              <li>{item.name}</li>
              <li>price: {item.price}</li>
              <li>strength: {item.strength}</li>
              <li>agility: {item.agility}</li>
              <button
                onClick={() => {
                  {
                    money >= item.price
                      ? handleAddFighter(item)
                      : console.log("Not enough money");
                  }
                  {
                    money >= item.price
                      ? handleMoney(item.price)
                      : console.log("Not enough money");
                  }
                  // handleAddFighter(item);
                  // handleMoney(item.price);
                }}
              >
                Add
              </button>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default App;

/**
 Create a function named handleAddFighter. This function will be triggered when you click the Add button for any character in the zombieFighters list.

ok - When you click Add on a character, this function should add the selected character’s object to the team state array. This is how you build your team.
ok - Each character comes with a price. Upon adding a character to your team, subtract the character’s price from your current money value. Think of it as spending money to recruit a team member.
ok - Before adding a character to the team, check if you have enough money to afford them. If your money is less than the character’s price, you shouldn’t be able to add them. In such cases, log a message to the console such as "Not enough money".
 */

/* Workings
 <p>{zombieFighters.price <= { money } ? handleMoney(money) : "Not enough money"}{" "}</p>


  const handleAddFighter = (team) => {
    setTeam((prevState) => [...prevState, JSON.stringify(team)]);
    // setFighter((prevState) => {
    //   return [...prevState, { fighter, idx }];
    // if (fighter.price <= money) {
    //   money -= fighter.price;
    // } else {
    //   ("Not enough money");
    // }
  };
 */
