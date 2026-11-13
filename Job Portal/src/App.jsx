import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import JobApply from './pages/JobApply'
import Applications from './pages/Applications'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/job-apply" element={<JobApply />} />
      </Routes>
    </>
  )
}

export default App
