import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Link1 from './pages/Link1.tsx'
import Link2 from './pages/Link2.tsx'

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="link1" element={<Link1 />} />
        <Route path="link2" element={<Link2 />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
