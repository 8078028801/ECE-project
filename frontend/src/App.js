
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Staffs from './Pages/Staffs/Staffs';
import Practicallab from './Pages/Practicallab/Practicallab';
import Gallery from './Pages/Gallery/Gallery';
import Sidebar from './Components/Sidebar/Sidebar';
import Departmentclub from './Pages/Departmentclub/Departmentclub';
import Firstyear from './Pages/Semester/Firstyear';
import Thirdyear from './Pages/Semester/Thirdyear';
import Secondyear from './Pages/Semester/Secondyear';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import Semester from './Pages/Semester/Semester';
import Students from './Pages/Students/Students';
import Home1 from './Pages/Home/Home1';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home1/>}/>
      <Route path="/about" element={<About/>}/>
     <Route path="/staff" element={<Staffs/>}/>
      <Route path="/practicallab" element={<Practicallab/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/sidebar" element={<Sidebar/>}/>
      <Route path="/club" element={<Departmentclub/>}/>
      <Route path="/firstyear" element={<Firstyear/>}/>
      <Route path="/secondyear" element={<Secondyear/>}/>
      <Route path="/thirdyear" element={<Thirdyear/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/semester" element={<Semester/>}/>
      <Route path="/students" element={<Students/>}/>
     </Routes>
      


      </BrowserRouter>
  );
}

export default App;
