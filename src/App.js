import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import Jumbo from "./components/Jumbo"
import Books from "./components/Books"

function App() {
  return (
    <div className="App">
      <MyNav title="EpiBooks" navitems={["Home", "Browse", "About"]}/>
      <Jumbo title="EpiBooks" description="lorem ipsum bla bla bla" />
      <Books />
      <MyFooter author="Flo"/>
    </div>
  );
}

export default App;
