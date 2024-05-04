import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import PageNotFound from './pages//PageNotFound';
import SignUp from './pages/SignUp';
import './index.css';
export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
    </>
  )
}