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
// import uk from './Components/Studyuk';
import Newzealand from './Components/Newzealand';
import Studyuk from './Components/Studyuk';
import Ukscholar from './Components/Ukscholar';
import Newzscholar from './Components/Newzscholar';
import Canadascholar from './Components/Canadascholar';



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
          <Route path='/study-uk' element={<Studyuk />}/>
           <Route path="/registration" element={<Registration />} />
           <Route path='/blog' element={<Blog />} />
           <Route path="/uk-scholarships" element={<Ukscholar />} />
          <Route path='/newzscholar' element={<Newzscholar />} />
          <Route path='/canadascholar' element={<Canadascholar />} />

        </Routes>
      </div>
    </BrowserRouter>
 
  );
}

export default App;
