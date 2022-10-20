import React from "react";
import { useState } from "react";

const Home = () => {
  //let name = "Jason";
  const [name, setName] = useState('Jason')
  const [age, setAge] = useState(38)

  const handleClick = () => {
    setName('Nosaj')
    setAge(56)
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{ name } is { age } years old</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
