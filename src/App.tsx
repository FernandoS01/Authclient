import {BrowserRouter, Routes, Route } from 'react-router-dom'

import RegisterPage  from '../Pages/RegisterPage/index.tsx'
import PrivateRoute from '../Components/PrivateRoute'
import Home from '../Pages/Home'

function App() {

  return (
   <BrowserRouter>
      <Routes>
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/' element={
          <PrivateRoute>{<Home />}</PrivateRoute>
        }></Route>
      </Routes>
   </BrowserRouter>
  )
}

export default App
