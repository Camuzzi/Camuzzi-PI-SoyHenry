//import {Route,Routes} from "react-router-dom";
import { Route,Routes } from "react-router-dom";

import Home from "./views/home/home.jsx";
import Landing from "./views/landing/landing.jsx";
import Detail from "./views/detail/detail.jsx";
import Create from "./views/create/create.jsx";

import './App.css';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path = "/" element={<Landing />} />
        <Route path = "/home" element={<Home />} />
        <Route path = "/detail/:id" element={<Detail />} />
        <Route path = "/create" element={<Create />} />
      </Routes>

    </div>
  );
}

export default App;
