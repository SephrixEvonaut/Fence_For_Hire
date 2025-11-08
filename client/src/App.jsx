import { Switch, Route } from "wouter";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import FenceOptions from "./pages/FenceOptions";
import Catalog from "./pages/Catalog";
import Testimonials from "./pages/Testimonials";
import Financing from "./pages/Financing";
import Contact from "./pages/Contact";
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
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
    </div>
  );
}

export default App;
