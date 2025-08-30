import { useState } from 'react';

export default function AnalyzerPage() {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const sampleTexts = [
    "I love pizza! It's amazing!",
    "This is terrible and boring.",
    "The weather is okay today.",
    "I'm so excited for the party!",
    "I don't like homework.",
    "The movie was good.",
    "This game is awesome and fun!",
    "I hate vegetables, they're yucky."
  ];

  // Simple but accurate sentiment analysis for kids
  const analyzeSentiment = (text) => {
    const happyWords = {
      'love': 3, 'amazing': 3, 'awesome': 3, 'fantastic': 3, 'wonderful': 3,
      'great': 2, 'good': 2, 'nice': 2, 'cool': 2, 'fun': 2, 'happy': 2,
      'excellent': 3, 'brilliant': 3, 'perfect': 3, 'beautiful': 2,
      'excited': 2, 'enjoy': 2, 'like': 1, 'okay': 1
    };
    
    const sadWords = {
      'hate': 3, 'terrible': 3, 'awful': 3, 'horrible': 3, 'disgusting': 3,
      'bad': 2, 'boring': 2, 'sad': 2, 'angry': 2, 'annoying': 2,
      'difficult': 1, 'hard': 1, 'problem': 1, 'wrong': 2, 'broken': 2,
      'worst': 3, 'stupid': 2, 'dumb': 2, 'ugly': 2, 'mean': 2
    };

    const words = text.toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/);
    let happyScore = 0;
    let sadScore = 0;
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

    // Check for negations (not, don't, etc.)
    const negations = ['not', 'dont', "don't", 'never', 'no'];
    const hasNegation = negations.some(neg => text.toLowerCase().includes(neg));
    
    if (hasNegation && happyScore > sadScore) {
      // Flip positive to negative if negated
      sadScore += happyScore;
      happyScore = 0;
    }

    let sentiment, confidence, emoji, bgColor, borderColor;
    
    if (happyScore > sadScore && happyScore > 0) {
      sentiment = 'POSITIVE';
      confidence = Math.min(95, 60 + Math.min(happyScore * 10, 35));
      emoji = '😊';
      bgColor = 'bg-green-100';
      borderColor = 'border-green-400';
    } else if (sadScore > happyScore && sadScore > 0) {
      sentiment = 'NEGATIVE';
      confidence = Math.min(95, 60 + Math.min(sadScore * 10, 35));
      emoji = '😢';
      bgColor = 'bg-red-100';
      borderColor = 'border-red-400';
    } else {
      sentiment = 'NEUTRAL';
      confidence = 75;
      emoji = '😐';
      bgColor = 'bg-gray-100';
      borderColor = 'border-gray-400';
    }

    return {
      sentiment,
      confidence,
      emoji,
      bgColor,
      borderColor,
      happyScore,
      sadScore,
      foundWords,
      hasNegation,
      explanation: generateKidExplanation(sentiment, foundWords, happyScore, sadScore, hasNegation)
    };
  };

  const generateKidExplanation = (sentiment, foundWords, happyScore, sadScore, hasNegation) => {
    let explanation = '';
    
    if (sentiment === 'POSITIVE') {
      explanation = `🎉 I found happy words: ${foundWords.happy.join(', ')}! These words show good feelings!`;
    } else if (sentiment === 'NEGATIVE') {
      explanation = `😔 I found sad words: ${foundWords.sad.join(', ')}. These words show not-so-good feelings.`;
      if (hasNegation) {
        explanation += ` Also, I noticed words like 'not' or 'don't' which can flip the meaning!`;
      }
    } else {
      if (foundWords.happy.length > 0 && foundWords.sad.length > 0) {
        explanation = `🤔 I found both happy words (${foundWords.happy.join(', ')}) and sad words (${foundWords.sad.join(', ')}), so the feeling is mixed!`;
      } else {
        explanation = "🤷 I didn't find strong emotion words, so this seems pretty neutral!";
      }
    }
    
    return explanation;
  };

  const handleAnalyze = async () => {
    if (!inputText.trim()) return;
    
    setIsAnalyzing(true);
    
    // Fun loading time for kids
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const analysis = analyzeSentiment(inputText);
    setResult(analysis);
    setIsAnalyzing(false);
  };

  const handleSampleClick = (sample) => {
    setInputText(sample);
    setResult(null);
  };

  const handleReset = () => {
    setInputText('');
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-8 pt-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-3xl p-8 border-4 border-dashed border-yellow-400 shadow-2xl relative overflow-hidden">
          {/* Cartoon Lab Equipment */}
          <div className="absolute top-2 left-2 text-2xl opacity-30">🧪⚗️🔬</div>
          <div className="absolute top-2 right-2 text-2xl opacity-30">🤖📊💻</div>
          <div className="absolute bottom-2 left-2 text-xl opacity-20">✨🌟⚡</div>
          <div className="absolute bottom-2 right-2 text-xl opacity-20">🎯🏆🎉</div>
          
          <div className="relative z-10">
            <div className="bg-white rounded-full p-4 inline-block shadow-lg mb-4 border-4 border-yellow-300">
              <div className="text-6xl wiggle">🔬</div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black mb-4 text-shadow-fun">
              Emotion Detective Lab! 🕵️♀️
            </h1>
            <div className="bg-white bg-opacity-90 rounded-2xl p-4 border-4 border-dashed border-yellow-300">
              <p className="text-xl text-blue-700 font-black">
                Type any sentence and watch me figure out the emotions! Just like Emma and Alex learned! ✨
              </p>
            </div>
          </div>
        </div>

        {/* Main Analyzer */}
        <div className="bg-white rounded-3xl shadow-2xl p-4 md:p-8 mb-8 border-4 border-purple-400">
          <div className="mb-6 md:mb-8">
            <label className="block text-xl md:text-3xl font-black text-purple-800 mb-4 md:mb-6 text-center">
              ✍️ Type a sentence and I'll tell you the feeling!
            </label>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Example: I love ice cream!"
              className="w-full h-20 md:h-24 p-4 md:p-6 border-4 border-purple-200 rounded-2xl text-lg md:text-2xl font-bold focus:border-purple-500 focus:outline-none bg-purple-50 resize-none text-center"
              maxLength={100}
            />
          </div>

          <div className="text-center mb-6 md:mb-8">
            {!inputText.trim() && (
              <div className="mb-4 text-lg md:text-xl font-bold text-purple-700 bg-purple-100 rounded-2xl p-4 border-4 border-purple-300">
                👆 Type something in the box above, then click the button below!
              </div>
            )}
            
            <button
              onClick={handleAnalyze}
              disabled={!inputText.trim() || isAnalyzing}
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-black py-4 md:py-6 px-8 md:px-12 rounded-full text-lg md:text-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border-4 border-green-300 hover:scale-110 shadow-2xl w-full md:w-auto"
            >
              {isAnalyzing ? (
                <>
                  <div className="animate-spin text-2xl md:text-3xl inline-block mr-2 md:mr-3">🔍</div>
                  <span>Thinking...</span>
                </>
              ) : (
                <>
                  <span className="text-2xl md:text-3xl mr-2 md:mr-3">🚀</span>
                  <span>Find the Feeling!</span>
                </>
              )}
            </button>
            
            {inputText && (
              <button
                onClick={handleReset}
                className="ml-0 md:ml-4 mt-3 md:mt-0 bg-gray-500 hover:bg-gray-600 text-white font-black py-4 md:py-6 px-6 md:px-8 rounded-full text-lg md:text-xl transition-all duration-300 border-4 border-gray-300 hover:scale-105 w-full md:w-auto"
              >
                <span className="text-xl md:text-2xl mr-1 md:mr-2">🔄</span>
                Clear
              </button>
            )}
          </div>

          {/* Results */}
          {result && (
            <div className="text-center mb-6 md:mb-8">
              <div className={`${result.bgColor} rounded-3xl p-6 md:p-12 border-4 ${result.borderColor} shadow-2xl`}>
                <div className="text-6xl md:text-8xl mb-4 md:mb-6">{result.emoji}</div>
                <h3 className="text-2xl md:text-4xl font-black text-gray-800 mb-3 md:mb-4">
                  This feeling is: <span className="text-3xl md:text-5xl">{result.sentiment}!</span>
                </h3>
                <div className="text-lg md:text-2xl text-gray-600 font-bold mb-6 md:mb-8">
                  I'm {result.confidence}% sure! 🎯
                </div>
                
                <div className="bg-white rounded-2xl p-4 md:p-6 border-4 border-gray-300 mb-4 md:mb-6">
                  <div className="text-lg md:text-2xl font-black text-gray-700 mb-3 md:mb-4">💡 Here's how I knew:</div>
                  <div className="text-base md:text-xl text-gray-600 font-bold">{result.explanation}</div>
                </div>
                
                {(result.foundWords.happy.length > 0 || result.foundWords.sad.length > 0) && (
                  <div className="bg-white rounded-2xl p-4 md:p-6 border-4 border-gray-300">
                    <div className="text-lg md:text-xl font-black text-gray-700 mb-3 md:mb-4">🔍 Words I Found:</div>
                    <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
                      {result.foundWords.happy.length > 0 && (
                        <div>
                          <div className="text-green-600 font-bold text-lg mb-2">😊 Happy Words:</div>
                          <div className="flex flex-wrap gap-2 justify-center">
                            {result.foundWords.happy.map((word, i) => (
                              <span key={i} className="bg-green-200 text-green-800 px-3 py-1 rounded-full font-bold border-2 border-green-400">
                                {word}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      {result.foundWords.sad.length > 0 && (
                        <div>
                          <div className="text-red-600 font-bold text-lg mb-2">😢 Sad Words:</div>
                          <div className="flex flex-wrap gap-2 justify-center">
                            {result.foundWords.sad.map((word, i) => (
                              <span key={i} className="bg-red-200 text-red-800 px-3 py-1 rounded-full font-bold border-2 border-red-400">
                                {word}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Sample Texts */}
        <div className="bg-white rounded-3xl shadow-2xl p-4 md:p-8 border-4 border-green-400">
          <h3 className="text-2xl md:text-3xl font-black text-green-800 mb-6 md:mb-8 text-center">
            🎯 Click these examples to try them!
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {sampleTexts.map((sample, index) => (
              <button
                key={index}
                onClick={() => handleSampleClick(sample)}
                className="p-4 md:p-6 border-4 border-green-200 rounded-2xl hover:border-green-400 hover:bg-green-50 transition-all duration-300 bg-white hover:scale-105 shadow-lg text-center"
              >
                <div className="text-gray-700 font-bold text-lg md:text-xl">{sample}</div>
              </button>
            ))}
          </div>
          
          <div className="mt-6 md:mt-8 bg-yellow-100 rounded-2xl p-4 md:p-6 border-4 border-yellow-400 text-center">
            <h4 className="font-black text-yellow-800 mb-3 md:mb-4 text-xl md:text-2xl">
              💡 How it Works:
            </h4>
            <p className="text-yellow-700 font-bold text-base md:text-xl">
              The computer looks for happy words like "love" and "amazing", 
              and sad words like "hate" and "terrible". 
              Then it decides which feeling is stronger! 🤖
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}