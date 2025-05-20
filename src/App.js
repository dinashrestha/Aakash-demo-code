import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import './App.css';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Imageslider from './Components/Imageslider';
import Header from './Components/Header';
import About from './Components/About';
import Studentservice from './Components/Studentservice';
import Registration from './Components/Registration';
import Achievements from './Components/Achievements';
import Trusted from './Components/Trusted';
import Blog from './Components/Blog';
import Testimonial from './Components/Testimonial';
import Footer from './Components/Footer';
import StudyAustralia from './Components/StudyAustralia';
import StudyIreland from'./Components/StudyIreland';
import StudyCanada from './Components/StudyCanada';
import Scholarship from './Components/Scholarship';
import Learn from './Components/Learn';
import Friend from './Components/Friend';
import New from './Components/New';
import newzealand from './Components/Newzealand';
import Newzealand from './Components/Newzealand';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Imageslider />
              <Header />
              <About />
              <Studentservice />
              <Registration />
              <Achievements />
              <Trusted />
              <Blog />
              <Testimonial />
              <Footer />
             
              
            </>
          } />
          <Route path="/scholarship" element={<Scholarship/>} />
          <Route path="/study-australia" element={<StudyAustralia />} />
          <Route path="/study-ireland" element={<StudyIreland />} />
          <Route path="/study-canada" element={<StudyCanada />} />
          <Route path = "/learn" element={<Learn />} />
          <Route path='/friend' element={<Friend/>} />
          <Route path='/new' element={<New/>} />
          <Route path='/newzealand' element={<Newzealand />} />
        </Routes>
      </div>
    </BrowserRouter>
 
  );
}

export default App;
