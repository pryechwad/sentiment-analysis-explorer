import { useState } from 'react';
import InteractiveExercise from '../components/InteractiveExercise';

export default function StoryPage() {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const chapters = [
    {
      id: 1,
      title: "Meet Emma and Alex! 👧👦",
      content: "Hi there! I'm Emma and this is my best friend Alex! We're 11 years old just like you! Emma LOVES figuring out how people feel, and Alex is super good with computers and gadgets. One day at school, something really cool happened...",
      image: "👧👦",
      bgColor: "bg-pink-100",
      borderColor: "border-pink-400",
      question: null
    },
    {
      id: 2,
      title: "The Big Mystery! 🕵️♀️",
      content: "Our teacher Ms. Rodriguez had a HUGE problem! 'Kids, our cafeteria wants to know what you think about the new pizza, but we have 500 comments to read! That would take FOREVER!' Emma jumped up with sparkly eyes: 'What if we could teach a computer to understand feelings like we do?'",
      image: "🏫📝",
      bgColor: "bg-blue-100",
      borderColor: "border-blue-400",
      question: {
        text: "What do you think Emma wants to do? 🤔",
        options: [
          "Count all the words in every comment",
          "Teach a computer to understand emotions in text! 🤖❤️",
          "Ask every student one by one",
          "Just ignore all the comments"
        ],
        correct: 1,
        explanation: "YES! Emma wants to use technology to understand emotions - that's exactly what sentiment analysis does! 🎉"
      }
    },
    {
      id: 3,
      title: "What is Sentiment Analysis? 🧠✨",
      content: "Alex got SO excited! 'Emma, that's called SENTIMENT ANALYSIS! It's like giving a computer superpowers to read emotions!' 'The computer becomes like an emotion detective!' said Emma. 'It reads words and figures out if someone is happy 😊, sad 😢, or just okay 😐!'",
      image: "🕵️♀️💻",
      bgColor: "bg-purple-100",
      borderColor: "border-purple-400",
      question: {
        text: "Sentiment Analysis helps computers understand: 🤖",
        options: [
          "Only happy feelings",
          "The emotions and feelings in text! 💭",
          "How to write better stories",
          "Math problems"
        ],
        correct: 1,
        explanation: "Perfect! Sentiment analysis is all about understanding emotions and feelings in text! 🌟"
      }
    },
    {
      id: 4,
      title: "The Three Emotion Types! 😊😢😐",
      content: "Ms. Rodriguez drew three big faces on the board: 😊 POSITIVE (happy, excited, love it!), 😢 NEGATIVE (sad, angry, don't like it!), and 😐 NEUTRAL (okay, fine, not sure). 'These are the three main feelings we look for!' she explained.",
      image: "😊😢😐",
      bgColor: "bg-green-100",
      borderColor: "border-green-400",
      exercise: {
        emoji: "🍕",
        question: "If someone writes 'This pizza is AMAZING and delicious!', what feeling is this?",
        options: [
          "Negative 😢",
          "Neutral 😐", 
          "Positive! 😊✨",
          "Confused 🤷"
        ],
        correctAnswer: 2,
        explanation: "Awesome! Words like 'AMAZING' and 'delicious' show super positive feelings! 🎉🍕"
      }
    },
    {
      id: 5,
      title: "Emma and Alex Try It! 🔬",
      content: "The friends collected some comments: 'The new burgers are AWESOME!' 😍, 'I really don't like the soggy fries' 😞, 'The salad is okay, I guess' 😐. They started sorting them into happy, sad, and neutral piles like detectives!",
      image: "📊🔍",
      bgColor: "bg-yellow-100",
      borderColor: "border-yellow-400",
      question: {
        text: "How would you sort 'I really don't like the soggy fries'? 🍟",
        options: [
          "Positive - they mentioned fries! 🍟",
          "Negative - they don't like something! 😞",
          "Neutral - it's just about food",
          "Happy - fries are yummy!"
        ],
        correct: 1,
        explanation: "Great detective work! 'Don't like' and 'soggy' (yucky and wet) show negative feelings! 🕵️♀️"
      }
    },
    {
      id: 6,
      title: "How Computers Learn Feelings! 🤖📚",
      content: "Alex explained: 'Computers learn by looking at THOUSANDS of examples! They notice that words like 'amazing', 'love', 'fantastic' usually mean HAPPY feelings! And words like 'hate', 'terrible', 'yucky' usually mean SAD feelings! It's like teaching a robot to be an emotion expert!'",
      image: "🤖📚",
      bgColor: "bg-indigo-100",
      borderColor: "border-indigo-400",
      question: {
        text: "Which words would help a computer find POSITIVE feelings? ✨",
        options: [
          "terrible, awful, hate 😞",
          "okay, fine, whatever 😐", 
          "amazing, love, fantastic! 😍",
          "computer, robot, machine 🤖"
        ],
        correct: 2,
        explanation: "Perfect! Words like 'amazing', 'love', and 'fantastic' are super positive emotion words! 🌟"
      }
    },
    {
      id: 7,
      title: "The Magic Behind the Scenes! ⚡🎯",
      content: "Emma was amazed: 'But HOW does it actually work?' Alex grinned: 'The computer reads each word, checks its emotion dictionary, counts happy and sad words, then decides! If there are more happy words, it says the whole message is positive!'",
      image: "⚡🎯",
      bgColor: "bg-red-100",
      borderColor: "border-red-400",
      question: {
        text: "What would a computer think about: 'The food is good but the line is terrible'? 🤔",
        options: [
          "Definitely positive! 😊",
          "Definitely negative! 😞",
          "Mixed feelings - both good AND bad words! 🤷",
          "Only about food 🍕"
        ],
        correct: 2,
        explanation: "Smart thinking! This has both positive ('good') and negative ('terrible') words, so it's mixed! 🎭"
      }
    },
    {
      id: 8,
      title: "Sentiment Analysis Everywhere! 🌍💡",
      content: "Ms. Rodriguez got excited: 'This is used EVERYWHERE! Netflix uses it to see if people like movies! Toy companies use it to see if kids like new toys! Even your favorite YouTubers use it to understand comments!' Emma and Alex's minds were blown! 🤯",
      image: "🌍💡",
      bgColor: "bg-teal-100",
      borderColor: "border-teal-400",
      question: null
    },
    {
      id: 9,
      title: "The School Project Success! 🏆🎉",
      content: "Emma and Alex built their own emotion detector for the cafeteria! They found that 70% of kids LOVED the new pizza! 🍕❤️ 20% had mixed feelings about the fries, and only 10% didn't like the new salad. The principal was SO impressed, she asked them to help with more school projects!",
      image: "🏆🎉",
      bgColor: "bg-orange-100",
      borderColor: "border-orange-400",
      question: {
        text: "What percentage of kids LOVED the new pizza? 🍕",
        options: [
          "20% 📊",
          "10% 📈",
          "70%! 🎉",
          "100% 💯"
        ],
        correct: 2,
        explanation: "Correct! 70% of students had positive feelings about the pizza! That's most of the school! 🎉🍕"
      }
    },
    {
      id: 10,
      title: "You're Ready to Be a Detective! 🎓✨",
      content: "Now YOU know the secret of sentiment analysis just like Emma and Alex! Remember: look for emotion words, think about the overall feeling, and decide if someone seems happy 😊, sad 😢, or neutral 😐. You're officially an EMOTION DETECTIVE! Ready to try it yourself?",
      image: "🎓✨",
      bgColor: "bg-gradient-to-r from-purple-100 to-pink-100",
      borderColor: "border-purple-400",
      question: null
    }
  ];

  const handleAnswer = (questionIndex, selectedOption) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: selectedOption
    });
  };

  const nextChapter = () => {
    if (currentChapter < chapters.length - 1) {
      setCurrentChapter(currentChapter + 1);
    }
  };

  const prevChapter = () => {
    if (currentChapter > 0) {
      setCurrentChapter(currentChapter - 1);
    }
  };

  const currentChapterData = chapters[currentChapter];
  const isAnswered = selectedAnswers[currentChapter] !== undefined;
  const isCorrect = currentChapterData.question && selectedAnswers[currentChapter] === currentChapterData.question.correct;

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-green-100 to-blue-100 py-8 pt-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Progress Bar */}
        <div className="mb-8 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-3xl p-6 shadow-xl border-4 border-yellow-300 relative overflow-hidden">
          {/* Cartoon Story Elements */}
          <div className="absolute top-1 left-2 text-lg opacity-30">👧🏽👦🏻📚</div>
          <div className="absolute top-1 right-2 text-lg opacity-30">🎭🎆✨</div>
          
          <div className="relative z-10">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-black flex items-center">
                <span className="text-2xl mr-2">📚</span>
                Story Adventure Progress
              </span>
              <span className="text-xl font-black bg-white text-purple-600 px-3 py-1 rounded-full">
                {currentChapter + 1} / {chapters.length}
              </span>
            </div>
            <div className="w-full bg-white bg-opacity-30 rounded-full h-8 border-4 border-white border-opacity-50">
              <div 
                className="bg-gradient-to-r from-yellow-400 to-orange-400 h-full rounded-full transition-all duration-500 flex items-center justify-end pr-2 shadow-lg"
                style={{ width: `${((currentChapter + 1) / chapters.length) * 100}%` }}
              >
                <span className="text-white font-bold text-lg">🚀</span>
              </div>
            </div>
          </div>
        </div>

        {/* Story Content */}
        <div className={`${currentChapterData.bgColor} rounded-3xl shadow-2xl p-10 mb-8 border-4 ${currentChapterData.borderColor}`}>
          <div className="text-center mb-8">
            <div className="text-8xl mb-6 hover:scale-110 transition-transform duration-300">
              {currentChapterData.image}
            </div>
            <h2 className="text-4xl font-black text-gray-800 mb-6">
              {currentChapterData.title}
            </h2>
          </div>
          
          <div className="text-xl text-gray-800 leading-relaxed mb-8 font-semibold bg-white bg-opacity-70 rounded-2xl p-6 border-2 border-gray-300">
            {currentChapterData.content}
          </div>

          {/* Interactive Exercise */}
          {currentChapterData.exercise && (
            <InteractiveExercise 
              exercise={currentChapterData.exercise}
              onComplete={(correct) => {
                if (correct) {
                  // Add points or progress tracking here
                }
              }}
            />
          )}
        </div>

        {/* Navigation */}
        <div className="bg-white rounded-3xl p-4 md:p-6 shadow-xl border-4 border-purple-300">
          {currentChapter === chapters.length - 1 && (
            <div className="mb-4 text-center bg-green-100 rounded-2xl p-4 border-4 border-green-400">
              <div className="text-2xl md:text-3xl font-black text-green-800 mb-2">
                🎉 Great Job! You finished the story!
              </div>
              <div className="text-lg md:text-xl font-bold text-green-700">
                Now try the Analyzer to practice what you learned! 🚀
              </div>
            </div>
          )}
          
          <div className="flex justify-between items-center">
            <button
              onClick={prevChapter}
              disabled={currentChapter === 0}
              className="flex items-center space-x-2 md:space-x-3 px-4 md:px-8 py-3 md:py-4 bg-gray-500 text-white rounded-2xl hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-black text-base md:text-lg border-4 border-gray-300"
            >
              <span className="text-lg md:text-xl">⬅️</span>
              <span>Back</span>
            </button>

            <div className="flex space-x-2 md:space-x-3">
              {chapters.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentChapter(index)}
                  className={`w-4 h-4 md:w-6 md:h-6 rounded-full transition-all duration-300 border-2 ${
                    index === currentChapter 
                      ? 'bg-purple-500 border-purple-700 scale-125' 
                      : 'bg-purple-200 border-purple-400 hover:bg-purple-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextChapter}
              disabled={currentChapter === chapters.length - 1}
              className="flex items-center space-x-2 md:space-x-3 px-4 md:px-8 py-3 md:py-4 bg-purple-500 text-white rounded-2xl hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-black text-base md:text-lg border-4 border-purple-300"
            >
              <span>Next</span>
              <span className="text-lg md:text-xl">➡️</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}