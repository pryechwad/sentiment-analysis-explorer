import { useState, useEffect } from 'react';

export default function ProgressTracker({ currentPage }) {
  const [progress, setProgress] = useState({
    storyCompleted: false,
    analyzerUsed: false,
    playgroundPlayed: false,
    totalScore: 0,
    badges: []
  });

  const badges = [
    { id: 'story-master', name: 'Story Master', emoji: '📚', description: 'Completed the Emma & Alex adventure!' },
    { id: 'analyzer-expert', name: 'Analyzer Expert', emoji: '🔬', description: 'Used the sentiment analyzer 5 times!' },
    { id: 'game-champion', name: 'Game Champion', emoji: '🏆', description: 'Played all playground games!' },
    { id: 'emotion-detective', name: 'Emotion Detective', emoji: '🕵️', description: 'Mastered sentiment analysis!' }
  ];

  useEffect(() => {
    // Load progress from localStorage
    const savedProgress = localStorage.getItem('sentimentor-progress');
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, []);

  useEffect(() => {
    // Save progress to localStorage
    localStorage.setItem('sentimentor-progress', JSON.stringify(progress));
  }, [progress]);

  const updateProgress = (type, value = true) => {
    setProgress(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const addBadge = (badgeId) => {
    setProgress(prev => ({
      ...prev,
      badges: [...prev.badges.filter(b => b !== badgeId), badgeId]
    }));
  };

  const getProgressPercentage = () => {
    const completed = [
      progress.storyCompleted,
      progress.analyzerUsed,
      progress.playgroundPlayed
    ].filter(Boolean).length;
    return Math.round((completed / 3) * 100);
  };

  return (
    <div className="bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-2xl p-4 shadow-lg border-4 border-yellow-300 mb-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-black flex items-center">
          <span className="text-xl mr-2">🎯</span>
          Learning Progress
        </h3>
        <div className="bg-white text-purple-600 px-3 py-1 rounded-full font-black text-sm">
          {getProgressPercentage()}%
        </div>
      </div>
      
      <div className="w-full bg-white bg-opacity-30 rounded-full h-3 mb-3">
        <div 
          className="bg-yellow-400 h-full rounded-full transition-all duration-500"
          style={{ width: `${getProgressPercentage()}%` }}
        />
      </div>
      
      <div className="grid grid-cols-3 gap-2 text-xs">
        <div className={`text-center p-2 rounded-lg ${progress.storyCompleted ? 'bg-green-400' : 'bg-white bg-opacity-20'}`}>
          <div className="text-lg">📚</div>
          <div className="font-bold">Story</div>
        </div>
        <div className={`text-center p-2 rounded-lg ${progress.analyzerUsed ? 'bg-green-400' : 'bg-white bg-opacity-20'}`}>
          <div className="text-lg">🔬</div>
          <div className="font-bold">Analyzer</div>
        </div>
        <div className={`text-center p-2 rounded-lg ${progress.playgroundPlayed ? 'bg-green-400' : 'bg-white bg-opacity-20'}`}>
          <div className="text-lg">🎮</div>
          <div className="font-bold">Games</div>
        </div>
      </div>
      
      {progress.badges.length > 0 && (
        <div className="mt-3 pt-3 border-t border-white border-opacity-30">
          <div className="text-sm font-bold mb-2">🏆 Badges Earned:</div>
          <div className="flex flex-wrap gap-1">
            {progress.badges.map(badgeId => {
              const badge = badges.find(b => b.id === badgeId);
              return badge ? (
                <span key={badgeId} className="bg-yellow-400 text-yellow-800 px-2 py-1 rounded-full text-xs font-bold">
                  {badge.emoji} {badge.name}
                </span>
              ) : null;
            })}
          </div>
        </div>
      )}
    </div>
  );
}