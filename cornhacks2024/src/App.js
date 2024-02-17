import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import UserPage from './UserPage';
import LiveSession from './LiveSession';
import About from './About';
import Footer from './components/Footer';

function App() {
  return (
    <>
       <div className="App">
       <Router>
        <Navbar />
       </Router>
        <div className="content">
          <Router>
            <Routes>
              <Route exact path="/" element={<UserPage />} />
              <Route exact path="/live" element={<LiveSession />} />
              <Route exact path="/about" element={<About />} />
            </Routes>
          </Router>
        </div>
        <Router>
          <Footer/> 
        </Router>
      </div>
      </>
  );
}

export default App;
