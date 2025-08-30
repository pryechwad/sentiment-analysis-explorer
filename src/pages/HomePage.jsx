import { useState } from 'react';

export default function HomePage({ onPageChange }) {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
    {
      id: 'story',
      emoji: "📚",
      character: "👧🏽👦🏻",
      title: "Interactive Story Adventure",
      description: "Join Emma and Alex as they discover how computers understand emotions! Learn through an engaging story with quizzes.",
      bgColor: "bg-purple-100",
      borderColor: "border-purple-300",
      textColor: "text-purple-800",
      funFact: "Meet your AI friends!",
      stats: "10 chapters • 6 quizzes"
    },
    {
      id: 'analyzer',
      emoji: "🔬",
      character: "🧪⚗️",
      title: "Sentiment Detective Lab",
      description: "Test real sentences and see how AI detects emotions! Try different examples and understand the magic behind sentiment analysis.",
      bgColor: "bg-blue-100",
      borderColor: "border-blue-300",
      textColor: "text-blue-800",
      funFact: "Be a mad scientist!",
      stats: "Real-time analysis • 50+ examples"
    },
    {
      id: 'playground',
      emoji: "🎮",
      character: "🏆🎯",
      title: "Interactive Playground",
      description: "Play emotion guessing games, sort sentences by feelings, and challenge yourself with fun activities!",
      bgColor: "bg-green-100",
      borderColor: "border-green-300",
      textColor: "text-green-800",
      funFact: "Level up your skills!",
      stats: "5 mini-games • Leaderboard"
    }
  ];

  const learningPath = [
    { step: 1, title: "What are emotions?", emoji: "😊😢😐", completed: false },
    { step: 2, title: "How computers read text", emoji: "🤖📖", completed: false },
    { step: 3, title: "Positive vs Negative words", emoji: "👍👎", completed: false },
    { step: 4, title: "Try the analyzer", emoji: "🔬", completed: false },
    { step: 5, title: "Master the games", emoji: "🎮", completed: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100 relative overflow-hidden pt-4">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-6xl animate-bounce opacity-30">🦄</div>
        <div className="absolute top-20 right-20 text-5xl wiggle opacity-30">🌈</div>
        <div className="absolute bottom-40 left-20 text-7xl bounce-fun opacity-30">⭐</div>
        <div className="absolute bottom-20 right-10 text-6xl animate-pulse opacity-30">🎪</div>
        <div className="absolute top-1/2 left-1/4 text-4xl wiggle opacity-30">🎨</div>
        <div className="absolute top-1/3 right-1/3 text-5xl bounce-fun opacity-30">🚀</div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          {/* Main Characters */}
          <div className="bg-white bg-opacity-90 rounded-full p-6 shadow-2xl border-4 border-yellow-400 mb-8 inline-block">
            <div className="flex space-x-6">
              <div className="text-center">
                <div className="text-6xl bounce-fun">👧🏽</div>
                <div className="text-sm font-black text-purple-600">Emma</div>
              </div>
              <div className="text-center">
                <div className="text-6xl wiggle">🤖</div>
                <div className="text-sm font-black text-blue-600">AI Helper</div>
              </div>
              <div className="text-center">
                <div className="text-6xl bounce-fun">👦🏻</div>
                <div className="text-sm font-black text-green-600">Alex</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-3xl p-8 border-4 border-yellow-400 shadow-2xl mb-8">
            <h1 className="text-5xl lg:text-6xl font-black mb-4">
              Welcome to <span className="text-yellow-300">SentiMentor</span>! 🎉
            </h1>
            <p className="text-xl lg:text-2xl font-bold mb-6">
              🕵️ Become an Emotion Detective and learn how AI understands feelings! 🕵️
            </p>
            <div className="bg-white bg-opacity-20 rounded-2xl p-4 backdrop-blur-sm">
              <p className="text-lg font-semibold">
                Interactive • Educational • Fun • Perfect for 6th Graders!
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <button
              onClick={() => onPageChange('story')}
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 md:px-12 py-4 md:py-6 rounded-full text-xl md:text-2xl font-black shadow-2xl hover:scale-110 transition-all duration-300 border-4 border-green-300 w-full md:w-auto"
            >
              🚀 Start Learning Adventure! 🚀
            </button>
            <div className="text-lg md:text-xl font-bold text-gray-700 bg-yellow-100 rounded-2xl p-4 border-4 border-yellow-400">
              👆 Click this big button to start learning!
            </div>
          </div>
        </div>

        {/* Simple Instructions with Big Buttons */}
        <div className="mb-16 text-center">
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border-4 border-blue-300">
            <h2 className="text-2xl md:text-3xl font-black text-blue-800 mb-6">
              🎯 Start Here - Follow These Steps:
            </h2>
            <div className="space-y-4 md:space-y-6">
              <button
                onClick={() => onPageChange('story')}
                className="w-full bg-purple-100 hover:bg-purple-200 rounded-2xl p-6 border-4 border-purple-300 hover:border-purple-500 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <div className="flex items-center justify-center space-x-4">
                  <div className="text-4xl md:text-5xl">1️⃣</div>
                  <div className="text-xl md:text-2xl font-black text-purple-800">Read the Story First! 📚</div>
                  <div className="text-2xl md:text-3xl">➡️</div>
                </div>
              </button>
              
              <button
                onClick={() => onPageChange('analyzer')}
                className="w-full bg-blue-100 hover:bg-blue-200 rounded-2xl p-6 border-4 border-blue-300 hover:border-blue-500 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <div className="flex items-center justify-center space-x-4">
                  <div className="text-4xl md:text-5xl">2️⃣</div>
                  <div className="text-xl md:text-2xl font-black text-blue-800">Try the Analyzer! 🔬</div>
                  <div className="text-2xl md:text-3xl">➡️</div>
                </div>
              </button>
              
              <button
                onClick={() => onPageChange('approaches')}
                className="w-full bg-indigo-100 hover:bg-indigo-200 rounded-2xl p-6 border-4 border-indigo-300 hover:border-indigo-500 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <div className="flex items-center justify-center space-x-4">
                  <div className="text-4xl md:text-5xl">3️⃣</div>
                  <div className="text-xl md:text-2xl font-black text-indigo-800">See 3 Methods! 🧪</div>
                  <div className="text-2xl md:text-3xl">➡️</div>
                </div>
              </button>
              
              <button
                onClick={() => onPageChange('playground')}
                className="w-full bg-green-100 hover:bg-green-200 rounded-2xl p-6 border-4 border-green-300 hover:border-green-500 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <div className="flex items-center justify-center space-x-4">
                  <div className="text-4xl md:text-5xl">4️⃣</div>
                  <div className="text-xl md:text-2xl font-black text-green-800">Play Games! 🎮</div>
                  <div className="text-2xl md:text-3xl">➡️</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-4 ${feature.borderColor} relative overflow-hidden cursor-pointer transform hover:scale-105`}
              onMouseEnter={() => setHoveredFeature(feature.id)}
              onMouseLeave={() => setHoveredFeature(null)}
              onClick={() => onPageChange(feature.id)}
            >
              {/* Background Pattern */}
              <div className="absolute top-2 right-2 text-3xl opacity-20">
                {feature.character}
              </div>
              <div className="absolute bottom-2 left-2 text-xl opacity-10">
                🌟✨🎈
              </div>
              
              <div className="text-center mb-6 relative z-10">
                <div className={`bg-white rounded-full p-4 inline-block shadow-lg mb-4 border-4 border-dashed border-gray-300 transition-transform duration-300 ${
                  hoveredFeature === feature.id ? 'scale-110 wiggle' : ''
                }`}>
                  <div className="text-5xl">
                    {feature.emoji}
                  </div>
                </div>
                
                <div className="bg-yellow-200 rounded-2xl p-2 mb-4 border-2 border-yellow-400">
                  <span className="text-sm font-black text-yellow-800">{feature.funFact}</span>
                </div>
                
                <h3 className={`text-2xl font-black ${feature.textColor} mb-4`}>
                  {feature.title}
                </h3>
                
                <p className={`${feature.textColor} font-bold text-lg mb-4`}>
                  {feature.description}
                </p>
                
                <div className="bg-white bg-opacity-70 rounded-lg p-2 border-2 border-gray-300">
                  <span className="text-sm font-bold text-gray-600">{feature.stats}</span>
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* Educational Goals */}
        <div className="bg-white bg-opacity-90 rounded-3xl p-10 shadow-2xl border-4 border-dashed border-purple-400">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🎓</div>
            <h2 className="text-4xl font-black text-purple-800 mb-4">What You'll Master</h2>
            <p className="text-xl text-purple-600 font-bold">Become an AI expert through hands-on learning!</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="text-xl font-black text-gray-800 mb-2">Understand AI</h3>
              <p className="text-gray-600 font-semibold">Learn how computers think and process human emotions</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-black text-gray-800 mb-2">Analyze Text</h3>
              <p className="text-gray-600 font-semibold">Discover patterns in language and emotional expressions</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-black text-gray-800 mb-2">Apply Knowledge</h3>
              <p className="text-gray-600 font-semibold">Use sentiment analysis in real-world scenarios</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}