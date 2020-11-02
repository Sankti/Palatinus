import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import { data } from './data';
import './components/style.css';
import Mapdiv from "./components/Mapdiv";
import Footer from "./components/Footer";
import SidebarLeft from './components/SidebarLeft';
import PlayButton from './components/PlayButton';
import SidebarRight from './components/SidebarRight';

import LowerSilesian from './components/voivodeships/LowerSilesian';
import KuyavianPomeranian from './components/voivodeships/KuyavianPomeranian';
import Lublin from './components/voivodeships/Lublin';
import Lubusz from './components/voivodeships/Lubusz';
import Lodz from './components/voivodeships/Lodz';
import LesserPoland from './components/voivodeships/LesserPoland';
import Masovian from './components/voivodeships/Masovian';
import Opole from './components/voivodeships/Opole';
import Subcarpathian from './components/voivodeships/Subcarpathian';
import Podlaskie from './components/voivodeships/Podlaskie';
import Pomeranian from './components/voivodeships/Pomeranian';
import Silesian from './components/voivodeships/Silesian';
import HolyCross from './components/voivodeships/HolyCross';
import WarmianMasurian from './components/voivodeships/WarmianMasurian';
import GreaterPoland from './components/voivodeships/GreaterPoland';
import WestPomeranian from './components/voivodeships/WestPomeranian';

function App() {
  return (
    <Router>
      <div className="container">
        <section className="sidebar">
          <SidebarLeft />
          <PlayButton />
        </section>
        <header className="mapdiv">
          <h1>{data.welcome.title}</h1>
          <Mapdiv />
        </header>
        <section className="sidebar">
          <Route exact path="/" component={SidebarRight} />
          <Route path="/LowerSilesian" component={LowerSilesian} />
          <Route path="/KuyavianPomeranian" component={KuyavianPomeranian} />
          <Route path="/Lublin" component={Lublin} />
          <Route path="/Lubusz" component={Lubusz} />
          <Route path="/Lodz" component={Lodz} />
          <Route path="/LesserPoland" component={LesserPoland} />
          <Route path="/Masovian" component={Masovian} />
          <Route path="/Opole" component={Opole} />
          <Route path="/Subcarpathian" component={Subcarpathian} />
          <Route path="/Podlaskie" component={Podlaskie} />
          <Route path="/Pomeranian" component={Pomeranian} />
          <Route path="/Silesian" component={Silesian} />
          <Route path="/HolyCross" component={HolyCross} />
          <Route path="/WarmianMasurian" component={WarmianMasurian} />
          <Route path="/GreaterPoland" component={GreaterPoland} />
          <Route path="/WestPomeranian" component={WestPomeranian} />
        </section>
      </div>
      <Footer />
    </Router>
  );
}

export default App;