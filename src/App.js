import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={< News  key='general' pageSize={8} country="in" category="general"/>}></Route>
          <Route path="/Business" element={ <News key='business'  pageSize={8} country="in" category="business"/>}></Route>
          <Route path="/Entertainment" element={<News key='entertainment'  pageSize={8} country="in" category="entertainment"/>}></Route>
          <Route path="/General" element={ <News key='general'  pageSize={8} country="in" category="general"/>}></Route>
          <Route path="/Health" element={ <News key='health'  pageSize={8} country="in" category="health"/>}></Route>
          <Route path="/Science" element={ <News key='science'  pageSize={8} country="in" category="science"/>}></Route>
          <Route path="/Sports" element={ <News key='sports'  pageSize={8} country="in" category="sports"/>}></Route>
          <Route path="/Technology" element={ <News  key='technology}>' pageSize={8} country="in" category="technology"/>}></Route>

        </Routes>
        </Router>
      </div>
    )
  }
}
/*import "./index.css";
import ForceGraph3d from 'react-force-graph-3d';

// Random data
const N = 10;
const gData = {
  nodes: [...Array(N).keys()].map((i) => ({ id: i })),

  
  links: [...Array(N).keys()]
    .filter((id) => id)
    .map((id) => ({
      source: id,
      target: Math.round(Math.random() * (id - 1))
    }))
};

export default function App() {
  return (
    <ForceGraph3d
      backgroundColor={"rgba(0,0,0,0)"}
      nodeColor={() => "red"}
      linkColor={() => "blue"}
      graphData={gData}
    />
  );
}*/

