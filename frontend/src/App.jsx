

import Header from'./Components/Header'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Medications from './Pages/Medication';
import Orders from './Pages/Orders';
import Home from './Pages/Home';
import SingleMedication from './Pages/SingleMedication';



function App() {

  return (
    <>
      <div className="App" >
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/medications' element={<Medications/>}/>
            <Route path='/medication/:id' element={<SingleMedication/>}/>
            <Route path='/orders' element={<Orders/>}/>
        </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
