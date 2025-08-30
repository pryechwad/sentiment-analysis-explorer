import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function Signup({ onToggle }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim()) {
      return setError('Please enter your name!');
    }

    if (password !== confirmPassword) {
      return setError('Oops! Your passwords don\'t match. Try again!');
    }

    const loginEmail = email.trim() || `${name.toLowerCase().replace(/\s+/g, '')}@sentimentor.local`;

    try {
      setError('');
      setLoading(true);
      await signup(loginEmail, password);
    } catch (error) {
      console.error('Signup error:', error);
      setError('Password must be at least 6 characters long!');
    }

    setLoading(false);
  }

  return (
    <div className="kid-card border-green-300 w-full max-w-sm md:max-w-md mx-auto relative overflow-hidden">
      {/* Animated Corner Characters */}
      <div className="absolute top-2 left-2 text-2xl opacity-30 bounce-fun">🦄</div>
      <div className="absolute top-2 right-2 text-2xl opacity-30 wiggle">🐼</div>
      <div className="absolute bottom-2 left-2 text-xl opacity-20 animate-pulse">🌈✨</div>
      <div className="absolute bottom-2 right-2 text-xl opacity-20 bounce-fun">🎆🎉</div>
      
      <div className="text-center mb-8 relative z-10">
        {/* Character Join Group */}
        <div className="bg-gradient-to-r from-green-200 to-blue-200 rounded-full p-4 inline-block shadow-lg mb-4 border-4 border-dashed border-green-400">
          <div className="flex items-center space-x-3">
            <div className="text-3xl wiggle">👧🏽</div>
            <div className="text-4xl bounce-fun">🌟</div>
            <div className="text-3xl wiggle">👦🏻</div>
            <div className="text-2xl animate-pulse">🤖</div>
          </div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-black text-green-800 mb-2 text-shadow-fun">Become a Detective!</h2>
        <p className="text-lg text-green-600 font-bold flex items-center justify-center">
          <span className="text-xl mr-2 bounce-fun">🎆</span>
          Join our emotion-solving team!
          <span className="text-xl ml-2 wiggle">🏆</span>
        </p>
      </div>

      {error && (
        <div className="bg-red-200 border-4 border-red-400 text-red-800 px-6 py-4 rounded-2xl mb-6 text-center font-bold">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
        <div className="relative">
          <div className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-xl md:text-2xl wiggle">👤</div>
          <input
            type="text"
            placeholder="Your Name 🌟"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="kid-input pl-12 md:pl-16 border-green-200 focus:border-green-500 bg-green-50 focus:bg-green-100 transition-colors"
            required
          />
        </div>

        <div className="relative">
          <div className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-xl md:text-2xl wiggle">📧</div>
          <input
            type="email"
            placeholder="Email (Optional) 📧"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="kid-input pl-12 md:pl-16 border-green-200 focus:border-green-500 bg-green-50 focus:bg-green-100 transition-colors"
          />
        </div>

        <div className="relative">
          <div className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-xl md:text-2xl wiggle">📱</div>
          <input
            type="tel"
            placeholder="Mobile Number (Optional) 📱"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="kid-input pl-12 md:pl-16 border-green-200 focus:border-green-500 bg-green-50 focus:bg-green-100 transition-colors"
          />
        </div>

        <div className="relative">
          <div className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-xl md:text-2xl bounce-fun">🔐</div>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Create Secret Password 🤫"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="kid-input pl-12 md:pl-16 pr-12 md:pr-16 border-green-200 focus:border-green-500 bg-green-50 focus:bg-green-100 transition-colors"
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

        <div className="relative">
          <div className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-xl md:text-2xl wiggle">🔒</div>
          <input
            type="password"
            placeholder="Type Password Again 🔁"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="kid-input pl-12 md:pl-16 pr-10 md:pr-12 border-green-200 focus:border-green-500 bg-green-50 focus:bg-green-100 transition-colors"
            required
          />
          {confirmPassword && password === confirmPassword && (
            <div className="absolute right-3 md:right-4 top-1/2 transform -translate-y-1/2 text-lg md:text-xl bounce-fun">✅</div>
          )}
          {confirmPassword && password !== confirmPassword && (
            <div className="absolute right-3 md:right-4 top-1/2 transform -translate-y-1/2 text-lg md:text-xl wiggle">❌</div>
          )}
        </div>

        <button
          disabled={loading}
          type="submit"
          className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-black py-4 px-6 rounded-full text-xl border-4 border-green-300 hover:scale-110 transition-all duration-300 disabled:opacity-50 shadow-2xl w-full"
        >
          {loading ? '🎯 Creating Account...' : '🎉 Join the Team!'}
        </button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-lg text-green-700 font-bold">
          Already a detective? {' '}
          <button
            onClick={onToggle}
            className="text-blue-600 hover:text-blue-700 font-black text-xl hover:scale-110 inline-block transition-transform"
          >
            Login Here! 🚀
          </button>
        </p>
      </div>
    </div>
  );
}