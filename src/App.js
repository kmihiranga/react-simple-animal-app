import './App.css';
import { useState } from 'react';
import AnimalShow from './AnimalShow';

function getRandomAnimals() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

  return animals[Math.floor(Math.random() * animals.length)];
}

console.log(getRandomAnimals());

function App() {
  const [animals, setAnimals] = useState([]);
  
  const handleSubmit = () => {
    setAnimals([...animals, getRandomAnimals()]);
  }

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div className="app">
      <button onClick={handleSubmit}>Add Animal</button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
}

export default App;
