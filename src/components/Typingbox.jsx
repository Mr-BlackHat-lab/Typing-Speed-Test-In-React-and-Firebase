import React, { useState } from "react";
var randomWords = require('random-words');

function Typingbox() {
  const [wordsArray, setWordsArray] = useState(() => {
    return randomWords(50);
  });

  return (
    <div>
      <div className="typebox">
        <div className="words">
          {wordsArray.map((word, index) => (
            <span key={index} className="word">
              {word.split('').map((char, charIndex) => (
                <span key={charIndex}>{char}</span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Typingbox;