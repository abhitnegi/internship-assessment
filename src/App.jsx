import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Show from './Pages/Details/Show';
import Form from './Components/Form/Form';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/shows/:imdbID' element={<Show />} />
          <Route path='/form/:imdbID' element={<Form />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
