import React from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/seach-box/search-box.component";

type monster = {
  name: string;
  id: number;
};

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      monsters: [],
      searchField: "",
    };

    //pasar la funcion desde afuera al component, problema es que tienes que bind all
    //this.handleChange = this.handleChange.bind(this);
  }

  //when this component mounted: cuando el elemente aparece en la pagina por primera vez
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response: any) => response.json())
      .then((users: monster) => this.setState({ monsters: users }));
  }

  //arrow function automatic bind in constructor.
  handleChange = (e: any) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster: any) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monster"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
