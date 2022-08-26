import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashbord from './components/Dashbord/Dashbord';
import GrandPa from './components/GrandPa/GrandPa';
import Header from './components/Header/Header'
import Home from './components/Home/Home'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/dashbord' element={<Dashbord></Dashbord>}></Route>
        <Route path='/grandpa' element={<GrandPa></GrandPa>}></Route>
      </Routes> 
    </div>
  );
}

export default App;