import './App.css';
import {Routes, Route} from 'react-router-dom'
import home from './Pages/home';
import intro from './Pages/intro';
import select from './Pages/select';
import contact from './Pages/contact';
import landing from './Pages/landing';
import Appheader from './Components/Header/header';
function App() {
  return (
  <div>
    <Appheader />
    <Routes>
      <Route path='/home' Component={home}></Route>
      <Route path='/intro' Component={intro}></Route>
      <Route path='/select'Component={select}></Route>
      <Route path='/contact'Component={contact}></Route>
      <Route path='/'Component={landing}></Route>
    </Routes>
  </div>
  );
}
export default App; 
