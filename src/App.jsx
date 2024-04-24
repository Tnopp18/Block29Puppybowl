import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AllPuppies from './Pages/AllPuppies';
import PuppyDetails from './components/PuppyDetails';
import './App.css';
import NavBar from './components/NavBar';
import Home from './Pages/Home';

const API_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-FT/players'

const App = () => {
  const [puppyList, setPuppyList] = useState([])

  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route
        path="/players"
        element={
          <AllPuppies 
          apiUrl={API_URL}
          puppyList={puppyList}
          setPuppyList={setPuppyList}
          />
        }
        />
      <Route 
      path='/players/:id'
      element={<PuppyDetails apiUrl={API_URL} setPuppyList={setPuppyList} />}
      />
    </Routes>
    </>
  )
};

export default App;