import { useState } from 'react';

export default function HelpButton() {
  const [showHelp, setShowHelp] = useState(false);

  const helpTips = [
    "🏠 Home: Start here to learn the steps!",
    "📚 Story: Read about Emma and Alex first!",
    "🔬 Try It: Type sentences to find feelings!",
    "🎮 Games: Play fun emotion games!",
    "❓ Stuck? Click the examples to try them!"
  ];

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <button
        onClick={() => setShowHelp(!showHelp)}
        className="bg-yellow-400 hover:bg-yellow-500 text-yellow-800 font-black p-4 rounded-full shadow-2xl border-4 border-yellow-600 transition-all duration-300 hover:scale-110"
      >
        <span className="text-2xl">❓</span>
      </button>
      
      {showHelp && (
        <div className="absolute bottom-16 left-0 bg-white rounded-2xl p-4 shadow-2xl border-4 border-yellow-400 w-64">
          <h3 className="text-lg font-black text-yellow-800 mb-3 text-center">
            🤔 Need Help?
          </h3>
          <div className="space-y-2">
            {helpTips.map((tip, index) => (
              <div key={index} className="text-sm font-bold text-gray-700 bg-yellow-50 rounded-lg p-2 border-2 border-yellow-200">
                {tip}
              </div>
            ))}
          </div>
          <button
            onClick={() => setShowHelp(false)}
            className="w-full mt-3 bg-yellow-400 hover:bg-yellow-500 text-yellow-800 font-black py-2 rounded-lg border-2 border-yellow-600"
          >
            Got it! ✅
          </button>
        </div>
      )}
    </div>
  );
}