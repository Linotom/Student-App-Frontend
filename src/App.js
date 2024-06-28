import logo from './logo.svg';
import './App.css';
import AddStudent from './components/AddStudent';
import StudentSearch from './components/StudentSearch';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={<AddStudent/>}/>
      <Route path= '/search' element={<StudentSearch/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
