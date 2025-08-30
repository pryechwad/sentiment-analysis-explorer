import { useState, useEffect } from 'react';

export default function PlaygroundPage() {
  const [currentGame, setCurrentGame] = useState('sorting');
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState('playing');
  const [draggedItem, setDraggedItem] = useState(null);

  // Game 1: Emotion Sorting Game
  const [sortingItems, setSortingItems] = useState([
    { id: 1, text: "I love ice cream! 🍦", emotion: "positive", placed: false },
    { id: 2, text: "This is boring 😴", emotion: "negative", placed: false },
    { id: 3, text: "The weather is okay", emotion: "neutral", placed: false },
    { id: 4, text: "Amazing job! 🎉", emotion: "positive", placed: false },
    { id: 5, text: "I hate homework 😤", emotion: "negative", placed: false },
    { id: 6, text: "It's fine, I guess", emotion: "neutral", placed: false }
  ]);

  // Game 2: Word Detective
  const [wordDetectiveWords] = useState([
    { word: "fantastic", emotion: "positive", points: 10 },
    { word: "terrible", emotion: "negative", points: 10 },
    { word: "okay", emotion: "neutral", points: 5 },
    { word: "amazing", emotion: "positive", points: 10 },
    { word: "awful", emotion: "negative", points: 10 },
    { word: "wonderful", emotion: "positive", points: 10 },
    { word: "boring", emotion: "negative", points: 10 },
    { word: "fine", emotion: "neutral", points: 5 }
  ]);

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [wordGameScore, setWordGameScore] = useState(0);

  // Game 3: Sentence Builder
  const [sentenceBuilder, setSentenceBuilder] = useState({
    words: ["I", "really", "love", "this", "amazing", "game", "!"],
    sentence: [],
    targetEmotion: "positive"
  });

  const games = [
    { id: 'sorting', name: 'Emotion Sorting', emoji: '🎯', description: 'Drag sentences to the right emotion box!' },
    { id: 'detective', name: 'Word Detective', emoji: '🕵️', description: 'Find the emotion in each word!' },
    { id: 'builder', name: 'Sentence Builder', emoji: '🏗️', description: 'Build sentences with different emotions!' },
    { id: 'quiz', name: 'Quick Quiz', emoji: '⚡', description: 'Test your emotion detection skills!' }
  ];

  const handleDragStart = (e, item) => {
    setDraggedItem(item);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e, targetEmotion) => {
    e.preventDefault();
    if (draggedItem) {
      const isCorrect = draggedItem.emotion === targetEmotion;
      
      setSortingItems(prev => 
        prev.map(item => 
          item.id === draggedItem.id 
            ? { ...item, placed: true, correct: isCorrect }
            : item
        )
      );

      if (isCorrect) {
        setScore(prev => prev + 10);
      }
      
      setDraggedItem(null);
    }
  };

  const handleWordDetectiveAnswer = (selectedEmotion) => {
    const currentWord = wordDetectiveWords[currentWordIndex];
    const isCorrect = currentWord.emotion === selectedEmotion;
    
    if (isCorrect) {
      setWordGameScore(prev => prev + currentWord.points);
    }
    
    if (currentWordIndex < wordDetectiveWords.length - 1) {
      setCurrentWordIndex(prev => prev + 1);
    } else {
      setGameState('completed');
    }
  };

  const resetGame = () => {
    setScore(0);
    setWordGameScore(0);
    setCurrentWordIndex(0);
    setGameState('playing');
    setSortingItems(prev => prev.map(item => ({ ...item, placed: false, correct: undefined })));
  };

  const renderSortingGame = () => (
    <div className="space-y-8">
      <div className="text-center bg-yellow-100 rounded-2xl p-6 border-4 border-yellow-400">
        <h3 className="text-2xl font-black text-yellow-800 mb-2">🎯 Drag & Drop Challenge!</h3>
        <p className="text-yellow-700 font-bold">Drag each sentence to the correct emotion box!</p>
        <div className="text-xl font-black text-yellow-800 mt-2">Score: {score} points! ⭐</div>
      </div>

      {/* Draggable Items */}
      <div className="bg-white rounded-2xl p-6 border-4 border-blue-300">
        <h4 className="text-xl font-black text-blue-800 mb-4 flex items-center">
          <span className="text-2xl mr-2">📝</span>
          Sentences to Sort:
        </h4>
        <div className="grid gap-4">
          {sortingItems.filter(item => !item.placed).map(item => (
            <div
              key={item.id}
              draggable
              onDragStart={(e) => handleDragStart(e, item)}
              className="bg-blue-50 border-4 border-blue-200 rounded-xl p-4 cursor-move hover:bg-blue-100 hover:scale-105 transition-all duration-300 font-bold text-lg"
            >
              {item.text}
            </div>
          ))}
        </div>
      </div>

      {/* Drop Zones */}
      <div className="grid md:grid-cols-3 gap-6">
        {['positive', 'negative', 'neutral'].map(emotion => (
          <div
            key={emotion}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, emotion)}
            className={`min-h-48 border-4 border-dashed rounded-2xl p-6 transition-all duration-300 ${
              emotion === 'positive' ? 'border-green-400 bg-green-50' :
              emotion === 'negative' ? 'border-red-400 bg-red-50' :
              'border-gray-400 bg-gray-50'
            }`}
          >
            <div className="text-center">
              <div className="text-4xl mb-2">
                {emotion === 'positive' ? '😊' : emotion === 'negative' ? '😢' : '😐'}
              </div>
              <h4 className="text-xl font-black capitalize mb-4">{emotion}</h4>
              
              {/* Placed Items */}
              <div className="space-y-2">
                {sortingItems.filter(item => item.placed && item.emotion === emotion).map(item => (
                  <div
                    key={item.id}
                    className={`p-3 rounded-lg border-2 font-bold ${
                      item.correct ? 'bg-green-200 border-green-400 text-green-800' : 
                      'bg-red-200 border-red-400 text-red-800'
                    }`}
                  >
                    {item.text} {item.correct ? '✅' : '❌'}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderWordDetectiveGame = () => {
    const currentWord = wordDetectiveWords[currentWordIndex];
    
    return (
      <div className="space-y-8">
        <div className="text-center bg-purple-100 rounded-2xl p-6 border-4 border-purple-400">
          <h3 className="text-2xl font-black text-purple-800 mb-2">🕵️ Word Detective Challenge!</h3>
          <p className="text-purple-700 font-bold">What emotion does this word show?</p>
          <div className="text-xl font-black text-purple-800 mt-2">Score: {wordGameScore} points! 🏆</div>
          <div className="text-lg font-bold text-purple-600">Word {currentWordIndex + 1} of {wordDetectiveWords.length}</div>
        </div>

        <div className="bg-white rounded-3xl p-12 border-4 border-purple-300 text-center">
          <div className="text-6xl font-black text-purple-800 mb-8 bg-purple-100 rounded-full p-8 inline-block border-4 border-purple-300">
            "{currentWord.word}"
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {['positive', 'negative', 'neutral'].map(emotion => (
              <button
                key={emotion}
                onClick={() => handleWordDetectiveAnswer(emotion)}
                className={`p-6 rounded-2xl border-4 font-black text-xl transition-all duration-300 hover:scale-105 ${
                  emotion === 'positive' ? 'border-green-400 bg-green-100 hover:bg-green-200 text-green-800' :
                  emotion === 'negative' ? 'border-red-400 bg-red-100 hover:bg-red-200 text-red-800' :
                  'border-gray-400 bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}
              >
                <div className="text-3xl mb-2">
                  {emotion === 'positive' ? '😊' : emotion === 'negative' ? '😢' : '😐'}
                </div>
                <div className="capitalize">{emotion}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderSentenceBuilderGame = () => (
    <div className="space-y-8">
      <div className="text-center bg-green-100 rounded-2xl p-6 border-4 border-green-400">
        <h3 className="text-2xl font-black text-green-800 mb-2">🏗️ Sentence Builder!</h3>
        <p className="text-green-700 font-bold">Build a {sentenceBuilder.targetEmotion} sentence using the words below!</p>
      </div>

      <div className="bg-white rounded-2xl p-8 border-4 border-green-300">
        <div className="mb-6">
          <h4 className="text-xl font-black text-green-800 mb-4">Your Sentence:</h4>
          <div className="min-h-16 bg-green-50 border-4 border-green-200 rounded-xl p-4 flex flex-wrap gap-2">
            {sentenceBuilder.sentence.map((word, index) => (
              <span key={index} className="bg-green-200 px-3 py-1 rounded-lg font-bold border-2 border-green-400">
                {word}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-black text-green-800 mb-4">Available Words:</h4>
          <div className="flex flex-wrap gap-3">
            {sentenceBuilder.words.map((word, index) => (
              <button
                key={index}
                onClick={() => setSentenceBuilder(prev => ({
                  ...prev,
                  sentence: [...prev.sentence, word],
                  words: prev.words.filter((_, i) => i !== index)
                }))}
                className="bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded-lg font-bold border-2 border-blue-300 transition-all duration-300 hover:scale-105"
              >
                {word}
              </button>
            ))}
          </div>
        </div>

        <div className="flex space-x-4">
          <button
            onClick={() => setSentenceBuilder(prev => ({
              ...prev,
              sentence: [],
              words: ["I", "really", "love", "this", "amazing", "game", "!"]
            }))}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-xl border-3 border-gray-300"
          >
            🔄 Reset
          </button>
          <button
            onClick={() => alert(`Great sentence: "${sentenceBuilder.sentence.join(' ')}"! 🎉`)}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl border-3 border-green-300"
          >
            ✅ Check Sentence
          </button>
        </div>
      </div>
    </div>
  );

  const renderQuickQuiz = () => {
    const quizQuestions = [
      {
        question: "Which word shows the STRONGEST positive emotion?",
        options: ["good", "amazing", "okay", "fine"],
        correct: 1,
        explanation: "Amazing shows much stronger positive emotion than the others!"
      },
      {
        question: "What emotion is 'I don't really like this much'?",
        options: ["Very positive", "Slightly negative", "Very negative", "Neutral"],
        correct: 1,
        explanation: "It's slightly negative because of 'don't like' but not very strong!"
      }
    ];

    return (
      <div className="space-y-8">
        <div className="text-center bg-orange-100 rounded-2xl p-6 border-4 border-orange-400">
          <h3 className="text-2xl font-black text-orange-800 mb-2">⚡ Quick Quiz Time!</h3>
          <p className="text-orange-700 font-bold">Test your emotion detection skills!</p>
        </div>

        <div className="bg-white rounded-2xl p-8 border-4 border-orange-300">
          <div className="text-center">
            <div className="text-4xl mb-4">🧠</div>
            <h4 className="text-2xl font-black text-orange-800 mb-6">Coming Soon!</h4>
            <p className="text-orange-700 font-bold text-lg">
              We're building an awesome quiz game for you! 
              Try the other games while we work on this one! 🚀
            </p>
          </div>
        </div>
      </div>
    );
  };

  const renderCurrentGame = () => {
    switch (currentGame) {
      case 'sorting': return renderSortingGame();
      case 'detective': return renderWordDetectiveGame();
      case 'builder': return renderSentenceBuilderGame();
      case 'quiz': return renderQuickQuiz();
      default: return renderSortingGame();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 py-8 pt-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-3xl p-8 border-4 border-dashed border-yellow-400 shadow-2xl relative overflow-hidden">
          <div className="absolute top-2 left-2 text-2xl opacity-30">🎮🏆🎯</div>
          <div className="absolute top-2 right-2 text-2xl opacity-30">⭐🌟✨</div>
          
          <div className="relative z-10">
            <div className="bg-white rounded-full p-4 inline-block shadow-lg mb-4 border-4 border-yellow-300">
              <div className="text-6xl wiggle">🎮</div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">
              Interactive Playground! 🎪
            </h1>
            <div className="bg-white bg-opacity-90 rounded-2xl p-4 border-4 border-dashed border-yellow-300">
              <p className="text-xl text-blue-700 font-black">
                Learn sentiment analysis through fun games and challenges! 🚀
              </p>
            </div>
          </div>
        </div>

        {/* Game Selection */}
        <div className="mb-8 bg-white rounded-3xl p-6 border-4 border-purple-400 shadow-xl">
          <h2 className="text-2xl font-black text-purple-800 mb-6 text-center flex items-center justify-center">
            <span className="text-3xl mr-3">🎯</span>
            Choose Your Game:
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            {games.map(game => (
              <button
                key={game.id}
                onClick={() => {
                  setCurrentGame(game.id);
                  resetGame();
                }}
                className={`p-6 rounded-2xl border-4 transition-all duration-300 hover:scale-105 font-bold text-center ${
                  currentGame === game.id 
                    ? 'border-purple-500 bg-purple-100 text-purple-800 scale-105' 
                    : 'border-purple-200 bg-white hover:border-purple-400 text-purple-600'
                }`}
              >
                <div className="text-4xl mb-2">{game.emoji}</div>
                <div className="text-lg font-black mb-2">{game.name}</div>
                <div className="text-sm">{game.description}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Current Game */}
        <div className="mb-8">
          {renderCurrentGame()}
        </div>

        {/* Learning Tips */}
        <div className="bg-white rounded-3xl p-8 border-4 border-yellow-400 shadow-xl">
          <h3 className="text-2xl font-black text-yellow-800 mb-6 text-center flex items-center justify-center">
            <span className="text-3xl mr-3">💡</span>
            Learning Tips:
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="font-black text-lg mb-2">Practice Makes Perfect!</h4>
              <p className="text-gray-600 font-semibold">The more you play, the better you get at detecting emotions!</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🧠</div>
              <h4 className="font-black text-lg mb-2">Think Like a Detective!</h4>
              <p className="text-gray-600 font-semibold">Look for clue words that show feelings and emotions!</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🌟</div>
              <h4 className="font-black text-lg mb-2">Have Fun Learning!</h4>
              <p className="text-gray-600 font-semibold">Games make learning about AI and emotions super fun!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}