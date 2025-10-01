import "./App.css";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MyCustomNav from "./components/MyCustomNav";
import MyCustomFooter from "./components/MyCustomFooter";
import MyCustomAlert from "./components/MyCustomAlert";
import MyAllTheBooks from "./components/MyAllTheBooks";


import fantasyBooks from "./books/fantasy.json";
import historyBooks from "./books/history.json";
import horrorBooks from "./books/horror.json";
import romanceBooks from "./books/romance.json";
import scifiBooks from "./books/scifi.json";

class App extends Component {
  state = { selectedBooks: fantasyBooks };
  render() {
    return (
      <>
        <MyCustomNav />
        <MyCustomAlert />

        <div className="text-center my-3">
          <button
            className="btn btn-primary me-2"
            onClick={() => this.setState({ selectedBooks: fantasyBooks })}
          >
            Fantasy
          </button>
          <button
            className="btn btn-secondary me-2"
            onClick={() => this.setState({ selectedBooks: historyBooks })}
          >
            History
          </button>
          <button
            className="btn btn-danger me-2"
            onClick={() => this.setState({ selectedBooks: horrorBooks })}
          >
            Horror
          </button>
          <button
            className="btn btn-warning me-2"
            onClick={() => this.setState({ selectedBooks: romanceBooks })}
          >
            Romance
          </button>
          <button
            className="btn btn-dark me-2"
            onClick={() => this.setState({ selectedBooks: scifiBooks })}
          >
            Sci-Fi
          </button>
        </div>

        <MyAllTheBooks library={this.state.selectedBooks} />
        <MyCustomFooter />
      </>
    );
  }
}

export default App;
