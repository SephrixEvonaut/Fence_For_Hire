import { Switch, Route } from "wouter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import FenceOptions from "./pages/FenceOptions";
import Catalog from "./pages/Catalog";
import Testimonials from "./pages/Testimonials";
import Financing from "./pages/Financing";
import Contact from "./pages/Contact";
import ArborPergola from "./pages/ArborPergola";
import ChainLink from "./pages/ChainLink";
import MetalFences from "./pages/MetalFences";
import VinylFences from "./pages/VinylFences";
import WoodFences from "./pages/WoodFences";
import OutdoorShower from "./pages/OutdoorShower";
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/fence-options/arbor-pergola" component={ArborPergola} />
          <Route path="/fence-options/chain-link" component={ChainLink} />
          <Route path="/fence-options/metal" component={MetalFences} />
          <Route path="/fence-options/vinyl" component={VinylFences} />
          <Route path="/fence-options/wood" component={WoodFences} />
          <Route path="/fence-options/outdoor-shower" component={OutdoorShower} />
          <Route path="/fence-options" component={FenceOptions} />
          <Route path="/catalog" component={Catalog} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/financing" component={Financing} />
          <Route path="/contact" component={Contact} />
          <Route>
            <div className="not-found">
              <h1>404 - Page Not Found</h1>
            </div>
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
