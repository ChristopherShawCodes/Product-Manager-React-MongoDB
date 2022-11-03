import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Form from './Components/Form';
import DisplayAll from './Components/DisplayAll';
import DisplayOne from './Components/DisplayOne';
import EditOne from './Components/EditOne';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Form/>}/>
          <Route path='/allProducts' element={<DisplayAll/>}/>
          <Route path='/product/:id' element={<DisplayOne/>}/>
          <Route path='/update/:id' element={<EditOne/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
