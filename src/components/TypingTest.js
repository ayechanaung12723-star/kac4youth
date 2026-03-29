import { useState, useEffect } from 'react';
import { typingLessons } from '../data/typingContent';

export default function TypingTest() {
  const [language, setLanguage] = useState('english');
  const [lessonIndex, setLessonIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);

  const targetText = typingLessons[language][lessonIndex];

  useEffect(() => {
    if (userInput.length === 1 && !startTime) {
      setStartTime(Date.now());
    }
    if (userInput === targetText) {
      calculateWPM();
    }
  }, [userInput]);

  const calculateWPM = () => {
    const timeElapsed = (Date.now() - startTime) / 60000; // in minutes
    const words = targetText.split(' ').length;
    setWpm(Math.round(words / timeElapsed));
  };

  const resetTest = (lang) => {
    setLanguage(lang);
    setUserInput("");
    setStartTime(null);
    setWpm(0);
    setLessonIndex(Math.floor(Math.random() * typingLessons[lang].length));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <div className="flex gap-4 mb-6">
        <button onClick={() => resetTest('english')} className={`px-4 py-2 rounded ${language === 'english' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>English</button>
        <button onClick={() => resetTest('myanmar')} className={`px-4 py-2 rounded ${language === 'myanmar' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>မြန်မာ (Unicode)</button>
      </div>

      <div className="mb-6 p-4 bg-gray-100 rounded text-xl leading-relaxed select-none">
        {targetText.split('').map((char, index) => {
          let color = "text-gray-500";
          if (index < userInput.length) {
            color = userInput[index] === char ? "text-green-600" : "text-red-600";
          }
          return <span key={index} className={color}>{char}</span>;
        })}
      </div>

      <textarea
        className="w-full border-2 p-4 rounded-lg focus:outline-none focus:border-blue-500 text-lg"
        rows="3"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="ဒီမှာ စတင်ရိုက်နှိပ်ပါ..."
      />

      {userInput === targetText && (
        <div className="mt-6 text-center animate-bounce">
          <p className="text-2xl font-bold text-green-600">ဂုဏ်ယူပါတယ်! 🎉</p>
          <p className="text-lg">Typing Speed: {wpm} WPM</p>
          <button onClick={() => resetTest(language)} className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-full">နောက်တစ်ခု စမ်းမယ်</button>
        </div>
      )}
    </div>
  );
}