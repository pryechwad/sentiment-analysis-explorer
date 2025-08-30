import { useState } from 'react';

export default function ApproachesPage() {
  const [currentApproach, setCurrentApproach] = useState('dictionary');
  const [inputText, setInputText] = useState('I love this amazing pizza!');
  const [results, setResults] = useState({});

  const approaches = [
    {
      id: 'dictionary',
      name: 'Dictionary Method',
      emoji: '📚',
      description: 'Uses a list of happy and sad words',
      color: 'bg-blue-100 border-blue-400'
    },
    {
      id: 'rules',
      name: 'Rule-Based Method',
      emoji: '⚖️',
      description: 'Follows grammar rules and patterns',
      color: 'bg-green-100 border-green-400'
    },
    {
      id: 'machine',
      name: 'Machine Learning',
      emoji: '🤖',
      description: 'Computer learns from examples',
      color: 'bg-purple-100 border-purple-400'
    }
  ];

  const dictionaryAnalysis = (text) => {
    const happyWords = { love: 3, amazing: 3, great: 2, good: 2, nice: 1, like: 1 };
    const sadWords = { hate: 3, terrible: 3, bad: 2, awful: 2, boring: 1 };
    
    const words = text.toLowerCase().split(/\s+/);
    let happyScore = 0, sadScore = 0;
    let foundWords = { happy: [], sad: [] };

    words.forEach(word => {
      if (happyWords[word]) {
        happyScore += happyWords[word];
        foundWords.happy.push(word);
      }
      if (sadWords[word]) {
        sadScore += sadWords[word];
        foundWords.sad.push(word);
      }
    });

    return {
      sentiment: happyScore > sadScore ? 'POSITIVE' : sadScore > happyScore ? 'NEGATIVE' : 'NEUTRAL',
      confidence: Math.min(95, 60 + Math.abs(happyScore - sadScore) * 10),
      explanation: `Found ${foundWords.happy.length} happy words and ${foundWords.sad.length} sad words`,
      details: foundWords
    };
  };

  const rulesAnalysis = (text) => {
    let score = 0;
    const rules = [
      { pattern: /I love/i, score: 3, rule: 'Strong positive phrase' },
      { pattern: /amazing|awesome|fantastic/i, score: 2, rule: 'Strong positive words' },
      { pattern: /don't|not/i, score: -1, rule: 'Negation detected' },
      { pattern: /!/g, score: 1, rule: 'Exclamation shows emotion' }
    ];

    let appliedRules = [];
    rules.forEach(rule => {
      const matches = text.match(rule.pattern);
      if (matches) {
        score += rule.score * matches.length;
        appliedRules.push(rule.rule);
      }
    });

    return {
      sentiment: score > 0 ? 'POSITIVE' : score < 0 ? 'NEGATIVE' : 'NEUTRAL',
      confidence: Math.min(95, 70 + Math.abs(score) * 5),
      explanation: `Applied ${appliedRules.length} rules`,
      details: appliedRules
    };
  };

  const machineLearningAnalysis = (text) => {
    // Simplified ML simulation
    const features = {
      wordCount: text.split(/\s+/).length,
      exclamations: (text.match(/!/g) || []).length,
      positiveWords: (text.match(/love|amazing|great|good/gi) || []).length,
      negativeWords: (text.match(/hate|terrible|bad|awful/gi) || []).length
    };

    const mlScore = (features.positiveWords * 2) - (features.negativeWords * 2) + (features.exclamations * 0.5);
    
    return {
      sentiment: mlScore > 0.5 ? 'POSITIVE' : mlScore < -0.5 ? 'NEGATIVE' : 'NEUTRAL',
      confidence: Math.min(95, 75 + Math.abs(mlScore) * 5),
      explanation: `ML model analyzed ${features.wordCount} words with ${features.positiveWords} positive and ${features.negativeWords} negative features`,
      details: features
    };
  };

  const analyzeText = () => {
    const newResults = {};
    newResults.dictionary = dictionaryAnalysis(inputText);
    newResults.rules = rulesAnalysis(inputText);
    newResults.machine = machineLearningAnalysis(inputText);
    setResults(newResults);
  };

  const getCurrentResult = () => results[currentApproach];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-8 pt-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-3xl p-6 md:p-8 border-4 border-yellow-400 shadow-2xl">
          <div className="text-6xl mb-4">🔬</div>
          <h1 className="text-3xl md:text-5xl font-black mb-4">
            3 Ways to Detect Emotions! 🧪
          </h1>
          <p className="text-lg md:text-xl font-bold">
            See how different methods find feelings in the same sentence!
          </p>
        </div>

        {/* Input Section */}
        <div className="bg-white rounded-3xl p-6 md:p-8 mb-8 border-4 border-indigo-400 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-black text-indigo-800 mb-4 text-center">
            ✍️ Type a sentence to analyze:
          </h2>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="w-full h-20 p-4 border-4 border-indigo-200 rounded-2xl text-lg md:text-xl font-bold focus:border-indigo-500 focus:outline-none bg-indigo-50 resize-none text-center"
            placeholder="Try: I love this amazing pizza!"
          />
          <div className="text-center mt-4">
            <button
              onClick={analyzeText}
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-black py-4 px-8 rounded-full text-xl border-4 border-green-300 hover:scale-110 transition-all duration-300 shadow-2xl"
            >
              🚀 Analyze with All Methods!
            </button>
          </div>
        </div>

        {/* Method Selection */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {approaches.map(approach => (
            <button
              key={approach.id}
              onClick={() => setCurrentApproach(approach.id)}
              className={`${approach.color} rounded-2xl p-6 border-4 transition-all duration-300 hover:scale-105 ${
                currentApproach === approach.id ? 'scale-110 shadow-2xl' : 'shadow-lg'
              }`}
            >
              <div className="text-4xl mb-3">{approach.emoji}</div>
              <h3 className="text-xl font-black mb-2">{approach.name}</h3>
              <p className="font-bold text-gray-700">{approach.description}</p>
            </button>
          ))}
        </div>

        {/* Results Display */}
        {getCurrentResult() && (
          <div className="bg-white rounded-3xl p-6 md:p-8 border-4 border-purple-400 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black text-purple-800 mb-6 text-center">
              📊 {approaches.find(a => a.id === currentApproach)?.name} Results:
            </h2>
            
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">
                {getCurrentResult().sentiment === 'POSITIVE' ? '😊' : 
                 getCurrentResult().sentiment === 'NEGATIVE' ? '😢' : '😐'}
              </div>
              <h3 className="text-3xl font-black text-gray-800 mb-2">
                Feeling: {getCurrentResult().sentiment}
              </h3>
              <p className="text-xl font-bold text-gray-600">
                Confidence: {getCurrentResult().confidence}%
              </p>
            </div>

            <div className="bg-yellow-100 rounded-2xl p-6 border-4 border-yellow-400 mb-6">
              <h4 className="text-xl font-black text-yellow-800 mb-3">💡 How this method works:</h4>
              <p className="text-yellow-700 font-bold text-lg">{getCurrentResult().explanation}</p>
            </div>

            {/* Method-specific details */}
            {currentApproach === 'dictionary' && getCurrentResult().details && (
              <div className="grid md:grid-cols-2 gap-4">
                {getCurrentResult().details.happy.length > 0 && (
                  <div className="bg-green-100 rounded-xl p-4 border-2 border-green-400">
                    <h5 className="font-black text-green-800 mb-2">😊 Happy Words Found:</h5>
                    <div className="flex flex-wrap gap-2">
                      {getCurrentResult().details.happy.map((word, i) => (
                        <span key={i} className="bg-green-200 px-2 py-1 rounded-lg font-bold text-green-800">
                          {word}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {getCurrentResult().details.sad.length > 0 && (
                  <div className="bg-red-100 rounded-xl p-4 border-2 border-red-400">
                    <h5 className="font-black text-red-800 mb-2">😢 Sad Words Found:</h5>
                    <div className="flex flex-wrap gap-2">
                      {getCurrentResult().details.sad.map((word, i) => (
                        <span key={i} className="bg-red-200 px-2 py-1 rounded-lg font-bold text-red-800">
                          {word}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {currentApproach === 'rules' && getCurrentResult().details && (
              <div className="bg-blue-100 rounded-xl p-4 border-2 border-blue-400">
                <h5 className="font-black text-blue-800 mb-2">⚖️ Rules Applied:</h5>
                <ul className="space-y-1">
                  {getCurrentResult().details.map((rule, i) => (
                    <li key={i} className="text-blue-700 font-bold">• {rule}</li>
                  ))}
                </ul>
              </div>
            )}

            {currentApproach === 'machine' && getCurrentResult().details && (
              <div className="bg-purple-100 rounded-xl p-4 border-2 border-purple-400">
                <h5 className="font-black text-purple-800 mb-2">🤖 ML Features:</h5>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>Words: {getCurrentResult().details.wordCount}</div>
                  <div>Exclamations: {getCurrentResult().details.exclamations}</div>
                  <div>Positive: {getCurrentResult().details.positiveWords}</div>
                  <div>Negative: {getCurrentResult().details.negativeWords}</div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Comparison Section */}
        {Object.keys(results).length === 3 && (
          <div className="mt-8 bg-white rounded-3xl p-6 md:p-8 border-4 border-green-400 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black text-green-800 mb-6 text-center">
              🏆 Compare All Methods:
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {approaches.map(approach => (
                <div key={approach.id} className={`${approach.color} rounded-2xl p-4 border-4`}>
                  <div className="text-center">
                    <div className="text-3xl mb-2">{approach.emoji}</div>
                    <h4 className="font-black mb-2">{approach.name}</h4>
                    <div className="text-2xl mb-2">
                      {results[approach.id]?.sentiment === 'POSITIVE' ? '😊' : 
                       results[approach.id]?.sentiment === 'NEGATIVE' ? '😢' : '😐'}
                    </div>
                    <p className="font-bold">{results[approach.id]?.sentiment}</p>
                    <p className="text-sm">{results[approach.id]?.confidence}% sure</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}