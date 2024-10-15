import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// src/App.jsx

const App = () => {
  const initData = [
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
  const [zombieFighters, setFighter] = useState(initData);
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setStrength] = useState(0);
  const [totalAgility, setAgility] = useState(0);

  const handleAddFighter = (team, idx) => {
    // setTeam((prevState) => [...prevState, JSON.stringify(team)]);
    setTeam((prevState) => [
      ...prevState,

      <ul key={idx}>
        <li>
          <img src={team.img} />
        </li>
        <li>{team.name}</li>
        <li>price: {team.price}</li>
        <li>strength: {team.strength}</li>
        <li>agility: {team.agility}</li>
      </ul>,
    ]);
  };

  const handleMoney = (money) => {
    setMoney((prevState) => prevState - money);
  };

  const handleStrength = (strength) => {
    setStrength((prevState) => prevState + strength);
  };

  const handleAgility = (agility) => {
    setAgility((prevState) => prevState + agility);
  };

  return (
    <div>
      <div>
        <h1>Zombie Fighters</h1>
        <section>Money: {money}</section>
        <section>Team Strength: {totalStrength} </section>
        <section>Team Agility: {totalAgility}</section>
        <div type="text" placeholder="team" value={team}>
          Team: {team.length === 0 ? <p>Pick some team members!</p> : team}
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
                className="add"
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
                  {
                    money >= item.price
                      ? handleStrength(item.strength)
                      : console.log("Not enough money");
                  }
                  {
                    money >= item.price
                      ? handleAgility(item.agility)
                      : console.log("Not enough money");
                  }
                  // handleAddFighter(item);
                  // handleMoney(item.price);
                }}
              >
                Add
              </button>
              <button
                className="Remove"
                onClick={() => {
                  //code block here
                }}
              >
                Remove
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
5. Display Total Team Strength: In this step, you’ll create a state to keep track of the total strength of your team and display it in the UI.

- Initialize a new state variable named totalStrength. Set its initial value to 0.
- Whenever a character is added or removed from the team, recalculate the total strength. This calculation should sum up the strength values of all characters currently in the team. (A great case for a helper function!)
- Show the value of totalStrength in the UI. If the team array is empty, totalStrength should be 0.
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

setTeam((prevState) => [...prevState, JSON.stringify(team)]);

stuck at part 4
<ul key={idx}>
        <li>
          <img src={team.img} />
        </li>
        <li>{team.name}</li>
        <li>price: {team.price}</li>
        <li>strength: {team.strength}</li>
        <li>agility: {team.agility}</li>
      </ul>,

      Team: {team.length === 0? <p>Pick some team members!</p> : {team}}
*/
