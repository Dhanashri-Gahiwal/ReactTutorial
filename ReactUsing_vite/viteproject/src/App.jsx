import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FunctionalComponent from './components/FunctionalComponent'
import ClassComponent from './components/ClassComponent'

function App() {

  return (
    <>
      <FunctionalComponent />
      <ClassComponent />
    </>
  )
}

export default App
