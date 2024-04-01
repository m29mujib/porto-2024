import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './layouts/Layout'
import About from './pages/About/About'
import Blogs from './pages/blogs/Blogs'
import Resume from './pages/resume/Resume'
import Contact from './pages/contact/Contact'

function App() {

  return (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
        <Route exact path='/' element={<About/>}/>
        <Route exact path="/about" element={<About/>} />
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Route>
    </Routes>
</BrowserRouter>
  )
}

export default App
