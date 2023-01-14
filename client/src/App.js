import React from 'react'
import ActivityForm from './components/ActivityForm'
import Activities from './components/Activities'
import Carddata from './components/Carddata';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './all.scss'


const App = () => {
  return (
    <>
      <div className="main-app">
        <BrowserRouter >
          <Routes>
            <Route path='/registerActivity' element={<ActivityForm />}/>
            <Route path='/registerActivity/:id' element={<ActivityForm />}/>
            <Route path='/card/:id' element={<Carddata/>}/>
            <Route path='/' element={<Activities />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;