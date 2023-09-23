

import Header from'./Header.jsx'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Medications from './Medication.jsx';
import Orders from './Orders.jsx';
import Home from './Home.jsx';



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
            <Route path='/orders' element={<Orders/>}/>
        </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
