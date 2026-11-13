import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import JobApply from './pages/JobApply'
import Applications from './pages/Applications'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/job-apply" element={<JobApply />} />
      </Routes>
      <h1 className='bg-red-500'>Hello my friend</h1>
    </>
  )
}

export default App
