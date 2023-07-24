
import './App.css';

//react routing
import {BrowserRouter, Routes, Route, Navigate, Outlet} from 'react-router-dom';

//components
import Home from './components/home/Home';
import Mission from './components/mission/Mission';
import Navbar from './components/navbar/Navbar';
import WhyEquality from './components/why equality/WhyEquality';
import Report from './components/Reports/Report';
import Footer from './components/Footer/Footer';
import ContactUs from './components/contact/ContactUS';

function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<Mission />} />
          <Route path='/whyequality' element={<WhyEquality />} />
          <Route path='/reports' element={<Report />} />
          <Route path='/contact' element={<ContactUs />} />
          
        </Routes>
          <Footer />
          
        </BrowserRouter>
    </div>
  );
}

export default App;
