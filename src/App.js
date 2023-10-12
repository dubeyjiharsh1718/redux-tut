import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from './Home';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Create from './Create';
import Update from './Update';
import Counter from "./Counter";
import Imggallery from './component/Imggallery';


// import HomeContainer from './container/HomeContainer'

function App() {
 
  return (
    
   <div>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/create' element={<Create />} />
    <Route path='/edit/:id' element={<Update />} />
    <Route path='/counter' element={<Counter />} />
    <Route path='/imggalery' element={<Imggallery />} />
   </Routes>
   </BrowserRouter>

   </div>
  )
}

export default App;
