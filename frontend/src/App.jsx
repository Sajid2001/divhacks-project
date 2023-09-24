

import Header from'./Components/Header'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Medications from './Pages/Medication';
import Orders from './Pages/Orders';
import Home from './Pages/Home';
import SingleMedication from './Pages/SingleMedication';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Footer from './Components/Footer';



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
            <Route path='/signin' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
      </div>
    </>
  )
}

export default App
