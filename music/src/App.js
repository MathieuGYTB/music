import './App.css';
import Layout from 'components/ui/layout';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from 'components/Home';
import About from 'components/About';

export default function App() {
  return (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
    </Layout>
  </Router>
  );
};

