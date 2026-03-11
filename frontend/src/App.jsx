import React from 'react'
import { Route, Routes } from 'react-router'
import CreatePage from './pages/CreatePage'
import HomePage from './pages/HomePage'
import NoteDetailPage from './pages/NoteDetailPage'
import toast from "react-hot-toast"


const App = () => {
  return <div>
    <button onClick={() => toast.error("Congrats")}>Click Me</button>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/note/:id" element={<NoteDetailPage />} />
    </Routes>
  </div>
}


export default App
