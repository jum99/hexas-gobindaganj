import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Courses from './components/Courses/Courses';
import Team from './components/Team/Team';
import Gallery from './components/Gallery/Gallery';
import Certificate from './components/Certificate/Certificate';
import Blogs from './components/Blogs/Blogs';
import CourseDetails from './components/Courses/CourseDetails';
import BlogDetails from './components/Blogs/BlogDetails';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='aboutUs' element={<AboutUs />} />
        <Route path='courses' element={<Courses />} />
        <Route path='team' element={<Team />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='certificate' element={<Certificate />} />
        <Route path='blogs' element={<Blogs />} />
        <Route path='courseDetails' element={<CourseDetails />} />
        <Route path='blogDetails' element={<BlogDetails />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
