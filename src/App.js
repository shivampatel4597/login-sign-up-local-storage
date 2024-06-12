import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Signin from './Signin';
import Form from './Form';
import Forget from './Forget';
import Project from './Project';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Project />

        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/form" element={<Form />} />
          <Route path="/forget"  element={<Forget/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
