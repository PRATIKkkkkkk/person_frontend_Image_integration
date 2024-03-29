import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Components/Pages/Home';
import Add from './Components/Pages/User/Add';
import Navbar from './Components/Layouts/Navbar';
import Show from './Components/Pages/User/Show';
import Update from './Components/Pages/User/Update';
import Delete from './Components/Pages/User/Delete';

function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/user/add' element={<Add />} />
            <Route path='/user/show' element={<Show />} />
            <Route path='/user/update/:pk' element={<Update />} />
            <Route path='/user/delete/:pk' element={<Delete />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
