import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
// import { Link } from "react-router-dom";
import { Logo, Nav } from './components/styles/styles';
import { GiKnifeFork } from "react-icons/gi";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <Logo to={'/'}>
            <GiKnifeFork />
            Delicious
          </Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;