import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function Login({ onToggle }) {
  const [nameOrEmail, setNameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    
    const loginEmail = nameOrEmail.includes('@') ? nameOrEmail : `${nameOrEmail.toLowerCase().replace(/\s+/g, '')}@sentimentor.local`;
    
    try {
      setError('');
      setLoading(true);
      await login(loginEmail, password);
    } catch (error) {
      console.error('Login error:', error);
      setError('Please check your name/email and password!');
    }
    
    setLoading(false);
  }

  return (
    <div className="kid-card border-purple-300 w-full max-w-sm md:max-w-md mx-auto relative overflow-hidden">
      {/* Animated Corner Characters */}
      <div className="absolute top-2 left-2 text-2xl opacity-30 wiggle">🐈</div>
      <div className="absolute top-2 right-2 text-2xl opacity-30 bounce-fun">🐶</div>
      <div className="absolute bottom-2 left-2 text-xl opacity-20 animate-pulse">✨🌟</div>
      <div className="absolute bottom-2 right-2 text-xl opacity-20 wiggle">🌈🎆</div>
      
      <div className="text-center mb-8 relative z-10">
        {/* Character Welcome Group */}
        <div className="bg-gradient-to-r from-purple-200 to-pink-200 rounded-full p-4 inline-block shadow-lg mb-4 border-4 border-dashed border-purple-400">
          <div className="flex items-center space-x-3">
            <div className="text-3xl bounce-fun">👧🏽</div>
            <div className="text-4xl wiggle">🎭</div>
            <div className="text-3xl bounce-fun">👦🏻</div>
          </div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-black text-purple-800 mb-2 text-shadow-fun">Welcome Back, Detective!</h2>
        <p className="text-lg text-purple-600 font-bold flex items-center justify-center">
          <span className="text-xl mr-2 wiggle">🔍</span>
          Ready to solve more emotion mysteries?
          <span className="text-xl ml-2 bounce-fun">🧪</span>
        </p>
      </div>

      {error && (
        <div className="bg-red-200 border-4 border-red-400 text-red-800 px-6 py-4 rounded-2xl mb-6 text-center font-bold">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
        <div className="relative">
          <div className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-xl md:text-2xl wiggle">👤</div>
          <input
            type="text"
            placeholder="Your Name or Email 😊"
            value={nameOrEmail}
            onChange={(e) => setNameOrEmail(e.target.value)}
            className="kid-input pl-12 md:pl-16 pr-10 md:pr-12 border-purple-200 focus:border-purple-500 bg-purple-50 focus:bg-purple-100 transition-colors"
            required
          />
          {nameOrEmail && (
            <div className="absolute right-3 md:right-4 top-1/2 transform -translate-y-1/2 text-lg md:text-xl bounce-fun">✨</div>
          )}
        </div>

        <div className="relative">
          <div className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-xl md:text-2xl bounce-fun">🔐</div>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Secret Password 🤫"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="kid-input pl-12 md:pl-16 pr-10 md:pr-16 border-purple-200 focus:border-purple-500 bg-purple-50 focus:bg-purple-100 transition-colors"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 md:right-4 top-1/2 transform -translate-y-1/2 text-xl md:text-2xl hover:scale-125 transition-transform wiggle"
          >
            {showPassword ? '🙈' : '👁️'}
          </button>
        </div>

        <button
          disabled={loading}
          type="submit"
          className="kid-button w-full disabled:opacity-50"
        >
          {loading ? '🔍 Logging in...' : '🚀 Start Adventure!'}
        </button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-lg text-purple-700 font-bold">
          New detective? {' '}
          <button
            onClick={onToggle}
            className="text-pink-600 hover:text-pink-700 font-black text-xl hover:scale-110 inline-block transition-transform"
          >
            Join the Team! 🎉
          </button>
        </p>
      </div>
    </div>
  );
}