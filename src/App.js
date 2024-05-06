import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Hero";
import Header from "./components/header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Hero from "./components/Hero";
import Stats from "./components/stats";
import Benefits from "./components/benefits";
import Categories from "./components/categories";
import Featured from "./components/featured";
import Faq from "./components/faq";
import YT from "./components/yt";
import Footer from "./components/footer";
import Banners from "./components/banners";
import About from "./components/about";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Banners />
                <Stats />
                <Benefits />
                <Categories />
                <Featured />
                <Faq />
                <YT />
              </>
            }
          />

<Route path="/about" element={<About/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
