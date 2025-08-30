import { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-pink-200 to-purple-300 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Cartoon Characters */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Happy Characters */}
        <div className="absolute top-10 left-4 md:left-10 text-4xl md:text-8xl animate-bounce opacity-70">👧🏽</div>
        <div className="absolute top-20 right-4 md:right-20 text-4xl md:text-8xl wiggle opacity-70">👦🏻</div>
        <div className="absolute bottom-20 left-4 md:left-20 text-3xl md:text-7xl bounce-fun opacity-70">🤖</div>
        <div className="absolute bottom-10 right-4 md:right-10 text-4xl md:text-8xl animate-pulse opacity-70">🐱</div>
        
        {/* Floating Fun Elements - Hidden on mobile */}
        <div className="hidden md:block absolute top-1/4 left-1/3 text-6xl wiggle opacity-60">🌈</div>
        <div className="hidden md:block absolute top-1/2 right-1/4 text-5xl bounce-fun opacity-60">🎆</div>
        <div className="hidden md:block absolute bottom-1/3 left-1/2 text-6xl animate-bounce opacity-60">🎉</div>
        <div className="hidden md:block absolute top-3/4 right-1/3 text-5xl wiggle opacity-60">✨</div>
        
        {/* Cute Animals - Smaller on mobile */}
        <div className="absolute top-1/3 left-1/4 text-3xl md:text-6xl animate-pulse opacity-60">🦄</div>
        <div className="absolute bottom-1/4 right-1/4 text-3xl md:text-6xl bounce-fun opacity-60">🐶</div>
        <div className="absolute top-2/3 left-1/6 text-2xl md:text-5xl wiggle opacity-60">🐼</div>
        
        {/* Magic Elements - Hidden on mobile */}
        <div className="hidden sm:block absolute top-1/6 right-1/6 text-4xl animate-bounce opacity-50">🌟</div>
        <div className="hidden sm:block absolute bottom-1/6 left-1/3 text-4xl wiggle opacity-50">🪄</div>
        <div className="hidden sm:block absolute top-5/6 right-1/2 text-4xl bounce-fun opacity-50">🎭</div>
      </div>
      
      <div className="relative z-10 w-full max-w-sm md:max-w-md px-4">
        <div className="text-center mb-6 md:mb-12">
          {/* Main Character Group */}
          <div className="bg-white bg-opacity-90 rounded-full p-4 md:p-6 shadow-2xl border-4 border-yellow-400 mb-4 md:mb-6 inline-block">
            <div className="flex items-center space-x-2 md:space-x-4">
              <div className="text-center">
                <div className="text-3xl md:text-5xl bounce-fun">👧🏽</div>
                <div className="text-xs font-bold text-purple-600">Emma</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-6xl wiggle">🎭</div>
                <div className="text-xs font-bold text-pink-600">Magic</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-5xl bounce-fun">👦🏻</div>
                <div className="text-xs font-bold text-blue-600">Alex</div>
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-purple-800 mb-4 title-glow">
            <span className="letter-dance">S</span>
            <span className="letter-dance">e</span>
            <span className="letter-dance">n</span>
            <span className="letter-dance">t</span>
            <span className="letter-dance">i</span>
            <span className="letter-dance">M</span>
            <span className="letter-dance">e</span>
            <span className="letter-dance">n</span>
            <span className="letter-dance">t</span>
            <span className="letter-dance">o</span>
            <span className="letter-dance">r</span>
          </h1>
          
          <div className="bg-gradient-to-r from-pink-400 to-purple-500 text-white rounded-3xl px-4 md:px-8 py-3 md:py-4 border-4 border-yellow-400 shadow-2xl inline-block">
            <p className="text-lg md:text-2xl font-black flex items-center">
              <span className="text-2xl md:text-3xl mr-2 bounce-fun">🕵️♀️</span>
              <span className="hidden sm:inline">Emotion Detective Academy!</span>
              <span className="sm:hidden">Detective Academy!</span>
              <span className="text-2xl md:text-3xl ml-2 wiggle">🕵️♂️</span>
            </p>
          </div>
          
          {/* Fun Floating Hearts */}
          <div className="mt-3 md:mt-4 flex justify-center space-x-1 md:space-x-2">
            <div className="text-lg md:text-2xl animate-bounce">❤️</div>
            <div className="text-lg md:text-2xl wiggle">💛</div>
            <div className="text-lg md:text-2xl bounce-fun">💚</div>
            <div className="text-lg md:text-2xl animate-pulse">💙</div>
            <div className="text-lg md:text-2xl wiggle">💜</div>
          </div>
        </div>

        {isLogin ? (
          <Login onToggle={() => setIsLogin(false)} />
        ) : (
          <Signup onToggle={() => setIsLogin(true)} />
        )}
      </div>
    </div>
  );
}