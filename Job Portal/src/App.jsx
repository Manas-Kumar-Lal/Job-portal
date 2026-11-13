import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import JobApply from './pages/JobApply'
import Applications from './pages/Applications'

function App() {

  return (
    <>
    <h1 className='bg-red-400'>hi</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/job-apply" element={<JobApply />} />
      </Routes>
    </>
  )
}

export default App
