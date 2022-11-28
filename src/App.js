import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Preloader from './components/Preloader';

const App = () => {
  const Home = lazy(() => import('./components/Home'));
  const Info = lazy(() => import('./components/Info'));
  //const Header = lazy(() => import('./components/Header'));
  return (
  <div className="wrapper">
    <Router>
    <Header />
      <Suspense fallback={<Preloader/>}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<Info />}/>
        </Routes>
      </Suspense>
    </Router>
    <Footer />
  </div>
);}

export default App;