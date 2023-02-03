import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LogIn from '../components/LogIn/LogIn'

const GloblaRouter = () => {
  return (
    <Routes>
        <Route path='/log-in' element={<LogIn/>}/>


    </Routes>
  )
}

export default GloblaRouter