import { useState, useEffect } from 'react';

export default function LearningTips({ currentPage }) {
  const [currentTip, setCurrentTip] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const tips = {
    home: [
      { emoji: '🎯', text: 'Start with the Story to learn the basics!' },
      { emoji: '🔬', text: 'Try the Analyzer to practice with real sentences!' },
      { emoji: '🎮', text: 'Play games to make learning super fun!' }
    ],
    story: [
      { emoji: '📚', text: 'Pay attention to Emma and Alex - they\'re great teachers!' },
      { emoji: '🤔', text: 'Think about each question before answering!' },
      { emoji: '💡', text: 'Look for emotion words in every sentence!' }
    ],
    analyzer: [
      { emoji: '🔍', text: 'Try typing different sentences to see how emotions change!' },
      { emoji: '⚡', text: 'Exclamation marks often show strong feelings!' },
      { emoji: '🧠', text: 'The computer counts happy and sad words!' }
    ],
    playground: [
      { emoji: '🎯', text: 'Drag and drop games help you practice sorting emotions!' },
      { emoji: '🕵️', text: 'Word Detective teaches you to spot emotion words quickly!' },
      { emoji: '🏗️', text: 'Sentence Builder lets you create your own emotional sentences!' }
    ]
  };

  const currentTips = tips[currentPage] || tips.home;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % currentTips.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentTips.length]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-40 max-w-sm">
      <div className="bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-2xl p-4 shadow-2xl border-4 border-yellow-300 relative">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-white hover:text-yellow-300 font-bold text-lg"
        >
          ×
        </button>
        
        <div className="flex items-start space-x-3">
          <div className="text-3xl flex-shrink-0 bounce-fun">
            {currentTips[currentTip].emoji}
          </div>
          <div>
            <h4 className="font-black text-yellow-300 mb-1 text-sm">💡 Learning Tip:</h4>
            <p className="font-bold text-sm leading-relaxed">
              {currentTips[currentTip].text}
            </p>
          </div>
        </div>
        
        <div className="flex justify-center mt-3 space-x-1">
          {currentTips.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentTip ? 'bg-yellow-300' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}