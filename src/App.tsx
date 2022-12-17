import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import RelevePage from './components/releve/RelevePage';
import VirementPage from './components/transaction/VirementPage';


function App() {
  return (
    <Router>
      <div>
        <Navigation/>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
         
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="releve/*" element={<RelevePage />} />
          <Route path="virement/*" element={<VirementPage />} />
      </Routes>
    
      </div>
    </Router>
  );
}

export default App;
