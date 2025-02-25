import React, { useState } from "react";

import { generate, count } from "random-words";

function Typingbox() {
  const [wordsArray, setWordsArray] = useState(() => {
    return generate(50);
  });

  return (
    <div>
      <div className="typebox">
        <div className="words">
          {wordsArray.map((word, index) => (
            <span key={index} className="word">
              {word.split('').map(char => (
                <span>{char}</span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Typingbox;