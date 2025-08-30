import { useAuth } from '../contexts/AuthContext';

export default function Navbar({ currentPage, onPageChange }) {
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Failed to log out');
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', emoji: '🏠', color: 'from-green-400 to-blue-500' },
    { id: 'story', label: 'Story', emoji: '📚', color: 'from-purple-400 to-pink-500' },
    { id: 'analyzer', label: 'Try It!', emoji: '🔬', color: 'from-yellow-400 to-orange-500' },
    { id: 'approaches', label: 'Methods', emoji: '🧪', color: 'from-indigo-400 to-purple-500' },
    { id: 'playground', label: 'Games', emoji: '🎮', color: 'from-pink-400 to-red-500' }
  ];

  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-2xl border-b-8 border-yellow-300 sticky top-0 z-50">
      <div className="w-full px-3 md:px-6 py-3 md:py-4">
        <div className="flex flex-wrap items-center justify-between gap-2 md:gap-4">
          {/* Logo Section */}
          <div className="flex items-center space-x-4 min-w-fit">
            <div className="bg-white rounded-full p-3 shadow-lg wiggle">
              <span className="text-3xl">🕵️</span>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-white text-shadow-fun">
                SentiMentor
              </h1>
              <p className="text-xs md:text-sm text-yellow-200 font-bold hidden md:block">Emotion Detective Academy</p>
            </div>
          </div>
          
          {/* Navigation Items */}
          <div className="flex flex-wrap items-center gap-2 md:gap-3 justify-center flex-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`px-4 py-4 md:px-6 md:py-4 rounded-2xl text-lg md:text-xl font-black flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-3 transition-all duration-300 border-4 shadow-lg min-w-[80px] md:min-w-auto ${
                  currentPage === item.id
                    ? 'bg-white text-purple-800 border-yellow-400 scale-110 bounce-fun'
                    : `bg-gradient-to-r ${item.color} text-white border-white border-opacity-70 hover:border-opacity-100 hover:scale-110 hover:shadow-xl`
                }`}
              >
                <span className="text-2xl md:text-2xl">{item.emoji}</span>
                <span className="text-xs md:text-xl">{item.label}</span>
              </button>
            ))}
          </div>

          {/* User Section */}
          <div className="flex items-center space-x-2 md:space-x-3 min-w-fit">
            {/* User Info */}
            <div className="bg-yellow-400 bg-opacity-90 rounded-2xl px-3 md:px-4 py-2 border-4 border-yellow-600 shadow-lg">
              <div className="flex items-center space-x-1 md:space-x-2">
                <span className="text-xl md:text-2xl">👤</span>
                <div className="block">
                  <span className="text-yellow-800 font-black text-xs md:text-base">
                    {currentUser?.email?.split('@')[0] || 'Detective'}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="bg-gradient-to-r from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 text-white px-3 md:px-4 py-2 md:py-3 rounded-2xl flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-2 transition-all duration-300 font-black text-xs md:text-base border-4 border-red-300 hover:scale-105 shadow-lg"
            >
              <span className="text-lg md:text-xl">👋</span>
              <span className="text-xs md:text-base">Bye!</span>
            </button>
          </div>
        </div>
        

      </div>
    </nav>
  );
}