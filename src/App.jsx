import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MandateModal from './components/MandateModal';
import HomePage from './pages/HomePage';
import LeadershipPage from './pages/LeadershipPage';
import InsightsPage from './pages/InsightsPage';
import ConnectPage from './pages/ConnectPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [mandateOpen, setMandateOpen] = useState(false);
  const [mandateData, setMandateData] = useState(null);

  const handleOpenMandate = (data = null) => {
    setMandateData(data);
    setMandateOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#10141a] text-[#dfe2eb] selection:bg-[#3456f6] selection:text-white">
        <Navbar onOpenMandate={() => handleOpenMandate()} />
        
        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<HomePage onOpenMandate={handleOpenMandate} />} />
            <Route path="/leadership" element={<LeadershipPage onOpenMandate={handleOpenMandate} />} />
            <Route path="/insights" element={<InsightsPage onOpenMandate={handleOpenMandate} />} />
            <Route path="/connect" element={<ConnectPage onOpenMandate={handleOpenMandate} />} />
            <Route path="*" element={<HomePage onOpenMandate={handleOpenMandate} />} />
          </Routes>
        </main>

        <Footer />
        <MandateModal 
          isOpen={mandateOpen} 
          onClose={() => {
            setMandateOpen(false);
            setMandateData(null);
          }} 
          initialData={mandateData}
        />
      </div>
    </BrowserRouter>
  );
}
