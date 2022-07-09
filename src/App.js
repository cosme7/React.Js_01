import React, {Component} from "react";
import fruit from "./assets/food_00.jpg";

class App extends Component{

  state = {
    name: "Cosme",
    age: 30,
    favoriteFood: "Strogonoff",
    favoriteMusic:["Remember Me", "Killing My Love", "Forever Young"]
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h2>{this.state.age}</h2>
        <h3>{this.state.favoriteFood}</h3>
        <h4>Fruta Favorita</h4>
        <img src={fruit} title="Morango" alt="Morango-img"/>
        <h2>Música Favorita</h2>
        <ul>
          <li>{this.state.favoriteMusic[0]}</li>
          <li>{this.state.favoriteMusic[1]}</li>
          <li>{this.state.favoriteMusic[2]}</li>
        </ul>
      </div>
    )
  }
}

export default App;