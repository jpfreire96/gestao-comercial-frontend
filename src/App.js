import {Component} from "react";
import Header from "./components/Header";
import RouterApp from "./router";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ( 
      <>
        <Header />
        <RouterApp />
      </>
    );
  }
}

export default App;
