import { StrictMode } from 'react'
import "./App.css";
import "./index.css";
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import About from './pages/About'
import Register from './pages/Register'
import Schedule from './pages/Schedule'
import Team from './pages/Team'
import Sponsors from './pages/Sponsors';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='about/' element={<About />} />
          <Route path='sponsors/' element={<Sponsors />} />
          <Route path='schedule/' element={<Schedule />} />
          <Route path='team/' element={<Team />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
