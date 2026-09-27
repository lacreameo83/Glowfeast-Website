import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import DesktopHomeScrrem from './pages/DesktopHomeView.tsx';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/signup" element={<HomePage />} /> */}
          <Route path="/GlowfeastHomePage" element={<DesktopHomeScrrem />} />
          {/* <Route path="/MobileHomeView" element={<HomePage />} /> */}
          
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}