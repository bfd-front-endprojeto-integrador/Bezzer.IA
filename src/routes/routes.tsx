import { Routes, Route } from 'react-router-dom'
import TelaDesenvolvimento from '../components/TelaDesen';
import Home from '../components/Home';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<TelaDesenvolvimento />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}

export default AppRoutes;
