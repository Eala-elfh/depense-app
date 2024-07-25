import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './components/form.js';
import NewPassword from './components/NewPassword.js';
import SignUp from './components/SignUp.js';
import Dashboard from './components/Dashboard.js';
import NavBar from './components/NavBar.js';
import logo from './pictures/appLOGO.png';


import IncomeForm from './components/IncomeForm.js';
import DepenseForm from './components/DepenseForm.js';
<<<<<<< HEAD
import Add from './components/Add.js';
import Report from './components/Report.js';
import Statics from './components/Statistics.js';
=======
>>>>>>> b6a4d09e6083a7717d7d73169843c7dd8620ea05

import usercontext from './contexts/UserContext.js';

import './components/NavBar.js';
function App() {
  return (
    <Router>
    <div className="App">
      <header> 
        <img src={logo} className='app-logo' alt='logo'/>
      </header>
      <main>
        <Routes>          
          <Route path='/' element={<LoginForm/>}/>
          <Route path='/forgot' element={<NewPassword/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/navbar' element={<NavBar/>}/>
          <Route path='/income' element={<IncomeForm/>}/>
          <Route path='/depense' element={<DepenseForm/>}/>
<<<<<<< HEAD
          <Route path='/add' element={<Add/>}/>
          <Route path='/Report' element={<Report/>}/>
          <Route path='/Statistics' element={<Statics/>}/>
=======
>>>>>>> b6a4d09e6083a7717d7d73169843c7dd8620ea05
        </Routes>
      </main>
    </div>
    </Router>
  );
}

export default App;
