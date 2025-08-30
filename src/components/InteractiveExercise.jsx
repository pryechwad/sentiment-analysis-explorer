import { useState } from 'react';

export default function InteractiveExercise({ exercise, onComplete }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    setTimeout(() => {
      if (answerIndex === exercise.correctAnswer) {
        onComplete(true);
      }
    }, 2000);
  };

  const isCorrect = selectedAnswer === exercise.correctAnswer;

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 border-4 border-yellow-400 shadow-xl mb-6">
      <div className="text-center mb-6">
        <div className="text-5xl mb-4">{exercise.emoji}</div>
        <h3 className="text-2xl md:text-3xl font-black text-yellow-800 mb-4">
          🤔 Quick Exercise!
        </h3>
        <p className="text-lg md:text-xl font-bold text-yellow-700">
          {exercise.question}
        </p>
      </div>

      <div className="space-y-4">
        {exercise.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            disabled={showResult}
            className={`w-full p-4 rounded-2xl border-4 font-bold text-lg transition-all duration-300 ${
              showResult
                ? index === exercise.correctAnswer
                  ? 'bg-green-200 border-green-500 text-green-800'
                  : selectedAnswer === index
                  ? 'bg-red-200 border-red-500 text-red-800'
                  : 'bg-gray-100 border-gray-300 text-gray-600'
                : 'bg-yellow-50 border-yellow-300 hover:bg-yellow-100 hover:border-yellow-500 hover:scale-105'
            }`}
          >
            {option}
            {showResult && index === exercise.correctAnswer && ' ✅'}
            {showResult && selectedAnswer === index && index !== exercise.correctAnswer && ' ❌'}
          </button>
        ))}
      </div>

      {showResult && (
        <div className={`mt-6 p-6 rounded-2xl border-4 ${
          isCorrect ? 'bg-green-100 border-green-400' : 'bg-orange-100 border-orange-400'
        }`}>
          <div className="text-center">
            <div className="text-4xl mb-3">
              {isCorrect ? '🎉' : '💡'}
            </div>
            <h4 className={`text-xl font-black mb-3 ${
              isCorrect ? 'text-green-800' : 'text-orange-800'
            }`}>
              {isCorrect ? 'Awesome! You got it right!' : 'Good try! Here\'s the answer:'}
            </h4>
            <p className={`font-bold text-lg ${
              isCorrect ? 'text-green-700' : 'text-orange-700'
            }`}>
              {exercise.explanation}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}