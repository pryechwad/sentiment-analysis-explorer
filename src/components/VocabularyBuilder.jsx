import { useState } from 'react';

export default function VocabularyBuilder() {
  const [selectedCategory, setSelectedCategory] = useState('positive');
  const [showDefinitions, setShowDefinitions] = useState(false);

  const vocabulary = {
    positive: [
      { word: 'amazing', definition: 'Something that surprises you in a wonderful way!', example: 'This ice cream is amazing!' },
      { word: 'fantastic', definition: 'Really, really good - better than great!', example: 'You did a fantastic job!' },
      { word: 'wonderful', definition: 'Something that makes you feel happy and excited!', example: 'What a wonderful day!' },
      { word: 'brilliant', definition: 'Super smart or really impressive!', example: 'That was a brilliant idea!' },
      { word: 'excellent', definition: 'The best quality - top notch!', example: 'Your work is excellent!' },
      { word: 'delightful', definition: 'Something that brings joy and pleasure!', example: 'The party was delightful!' }
    ],
    negative: [
      { word: 'terrible', definition: 'Really, really bad - the worst!', example: 'The weather is terrible today.' },
      { word: 'awful', definition: 'Something that makes you feel bad or upset!', example: 'That movie was awful.' },
      { word: 'horrible', definition: 'Very unpleasant and scary!', example: 'I had a horrible nightmare.' },
      { word: 'disgusting', definition: 'Something that makes you feel sick or grossed out!', example: 'This food tastes disgusting.' },
      { word: 'annoying', definition: 'Something that bothers you and makes you frustrated!', example: 'That noise is really annoying.' },
      { word: 'disappointing', definition: 'When something doesn\'t meet your hopes!', example: 'The game was disappointing.' }
    ],
    neutral: [
      { word: 'okay', definition: 'Not bad, not great - just fine!', example: 'The movie was okay.' },
      { word: 'average', definition: 'Normal, typical - nothing special!', example: 'It was an average day.' },
      { word: 'fine', definition: 'Acceptable, but not exciting!', example: 'The food was fine.' },
      { word: 'decent', definition: 'Good enough, satisfactory!', example: 'It was a decent performance.' },
      { word: 'moderate', definition: 'Not too much, not too little - in the middle!', example: 'The temperature is moderate.' },
      { word: 'fair', definition: 'Reasonable and balanced!', example: 'That\'s a fair decision.' }
    ]
  };

  const categories = [
    { id: 'positive', name: 'Happy Words', emoji: '😊', color: 'green' },
    { id: 'negative', name: 'Sad Words', emoji: '😢', color: 'red' },
    { id: 'neutral', name: 'Neutral Words', emoji: '😐', color: 'gray' }
  ];

  const getColorClasses = (color) => {
    const colors = {
      green: 'bg-green-100 border-green-400 text-green-800',
      red: 'bg-red-100 border-red-400 text-red-800',
      gray: 'bg-gray-100 border-gray-400 text-gray-800'
    };
    return colors[color] || colors.gray;
  };

  return (
    <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-purple-400 mb-8">
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">📚</div>
        <h2 className="text-3xl font-black text-purple-800 mb-4">Emotion Vocabulary Builder!</h2>
        <p className="text-purple-600 font-bold text-lg">
          Learn new words to express feelings better! 🌟
        </p>
      </div>

      {/* Category Selection */}
      <div className="flex justify-center mb-8">
        <div className="bg-purple-100 rounded-2xl p-2 border-4 border-purple-300">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-black text-lg transition-all duration-300 mx-1 border-4 ${
                selectedCategory === category.id
                  ? `${getColorClasses(category.color)} scale-105`
                  : 'bg-white border-purple-200 text-purple-600 hover:border-purple-400'
              }`}
            >
              <span className="text-2xl mr-2">{category.emoji}</span>
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Toggle Definitions */}
      <div className="text-center mb-6">
        <button
          onClick={() => setShowDefinitions(!showDefinitions)}
          className="bg-yellow-400 hover:bg-yellow-500 text-yellow-800 font-black py-3 px-6 rounded-2xl border-4 border-yellow-600 transition-all duration-300 hover:scale-105"
        >
          <span className="text-xl mr-2">{showDefinitions ? '🙈' : '👀'}</span>
          {showDefinitions ? 'Hide' : 'Show'} Definitions
        </button>
      </div>

      {/* Vocabulary Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vocabulary[selectedCategory].map((item, index) => {
          const category = categories.find(c => c.id === selectedCategory);
          return (
            <div
              key={index}
              className={`${getColorClasses(category.color)} rounded-2xl p-6 border-4 transition-all duration-300 hover:scale-105 hover:shadow-lg`}
            >
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">{category.emoji}</div>
                <h3 className="text-2xl font-black">{item.word}</h3>
              </div>
              
              {showDefinitions && (
                <div className="space-y-3">
                  <div className="bg-white bg-opacity-70 rounded-xl p-3 border-2 border-current border-opacity-30">
                    <h4 className="font-black text-sm mb-1">📖 What it means:</h4>
                    <p className="font-semibold text-sm">{item.definition}</p>
                  </div>
                  
                  <div className="bg-white bg-opacity-70 rounded-xl p-3 border-2 border-current border-opacity-30">
                    <h4 className="font-black text-sm mb-1">💬 Example:</h4>
                    <p className="font-semibold text-sm italic">"{item.example}"</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Learning Activity */}
      <div className="mt-8 bg-blue-100 rounded-2xl p-6 border-4 border-blue-400">
        <h3 className="text-xl font-black text-blue-800 mb-4 flex items-center">
          <span className="text-2xl mr-2">🎯</span>
          Try This Activity:
        </h3>
        <div className="bg-white rounded-xl p-4 border-2 border-blue-300">
          <p className="text-blue-700 font-bold mb-3">
            Pick a word from above and create your own sentence using it! 
            Then try the Analyzer to see if the computer detects the right emotion! 🔬
          </p>
          <div className="text-center">
            <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-lg font-black text-sm border-2 border-blue-400">
              💡 Example: "The pizza was absolutely fantastic!" 
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}