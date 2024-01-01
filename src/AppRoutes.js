import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Layout from './components/Layout';
import Experience from './pages/Experience';
import Projects from './pages/Projects';


export default function AppRoutes() {
  return (
    <div>
          <HashRouter>
            <Routes>
              <Route path="/" element={<Layout/>}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Projects/>} />
                <Route path="/experience" element={<Experience/>} />
              </Route>
            </Routes>
          </HashRouter>
    </div>
  )
}

