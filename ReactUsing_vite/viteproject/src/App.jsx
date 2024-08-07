import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FunctionalComponent from './components/FunctionalComponent'
import ClassComponent from './components/ClassComponent'
import ListKeys from './components/ListKeys'
import PropsOne from './components/props/PropsOne'
import CounterApp from './components/CounterApp'

function App() {

  return (
    <>
      <CounterApp />
      {/* <PropsOne />
      <ListKeys />
      <FunctionalComponent />
      <ClassComponent /> */}
    </>
  )
}

export default App
