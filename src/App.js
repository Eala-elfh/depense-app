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
import Add from './components/Add.js';
import Report from './components/Report.js';
import Statics from './components/Statistics.js';

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
          <Route path='/add' element={<Add/>}/>
          <Route path='/Report' element={<Report/>}/>
          <Route path='/Statistics' element={<Statics/>}/>
        </Routes>
      </main>
    </div>
    </Router>
  );
}

export default App;
