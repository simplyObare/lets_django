import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Create from './components/Create.jsx'
import NavBar from './components/NavBar.jsx'

function App() {
  return (
    <div className="app">
      <NavBar
        drawerWidth={240}
        content={
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        }
      />
    </div>
  )
}

export default App
