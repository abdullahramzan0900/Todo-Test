
import './App.css';
import Main1 from './Component2/Main1';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Table from './Component2/Table';




function App() {
  return (
      <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Main1/>} />
        <Route path='/Table' element={<Table/>} />
        
      </Routes> 
    </div>
      </BrowserRouter>


  );
}

export default App;
