import { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import AuthPage from './components/AuthPage';
import Navbar from './components/Navbar';
import HelpButton from './components/HelpButton';
import HomePage from './pages/HomePage';
import StoryPage from './pages/StoryPage';
import AnalyzerPage from './pages/AnalyzerPage';
import PlaygroundPage from './pages/PlaygroundPage';
import ApproachesPage from './pages/ApproachesPage';

function AppContent() {
  const { currentUser } = useAuth();
  const [currentPage, setCurrentPage] = useState('home');

  if (!currentUser) {
    return <AuthPage />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={setCurrentPage} />;
      case 'story':
        return <StoryPage />;
      case 'analyzer':
        return <AnalyzerPage />;
      case 'playground':
        return <PlaygroundPage />;
      case 'approaches':
        return <ApproachesPage />;
      default:
        return <HomePage onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100">
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="w-full">
        {renderPage()}
      </main>
      <HelpButton />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
