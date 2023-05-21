import { Fragment } from 'react';
import logo from './logo.svg';
import Logo from './components/logo/Logo';
import Navbar from './components/navbar/Navbar';
import Navbarr from './components/navbarr/Navbarr';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';
import Energy from './components/energy/Energy';
import Services from './components/services/Services';
import { Card } from '@mui/material';
import Cards from './components/card/Cards';
import SmallCards from './components/smallCards/SmallCards';
import BigCards from './components/bigCards/BigCards';
// import './App.css';

function App() {
  return (
    <Fragment>

      <Logo/>
      <Navbar/>
      {/* <Navbarr/> */}
      <Home/>
      <Profile/>
      <Energy/>
      <Services/>
      <Cards/>
      <SmallCards/>
      <BigCards/>
    </Fragment>
  );
}

export default App;
