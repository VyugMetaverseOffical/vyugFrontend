import React, { useState, useEffect } from 'react';

const ScrambleText = ({ duration, interval, charset, uppercase, text }) => {
  const [scrambledText, setScrambledText] = useState(text);
  const [iteration, setIteration] = useState(0);
  const [spliceIteration, setSpliceIteration] = useState(0);
  const [terminated, setTerminated] = useState(false);

  useEffect(() => {
    const magicNumber = parseInt(duration / interval / text.length);

    const random = (characterList) => {
      const length = characterList.length;
      const randomNumber = Math.floor(Math.random() * length);
      const letter = characterList[randomNumber];

      return uppercase ? letter.toUpperCase() : letter;
    };

    const replacer = (scrambledArray, originalArr, charsToReplace) => {
      const replacement = originalArr.slice(0, charsToReplace).join('');
      scrambledArray.splice(0, replacement.length, replacement);
    };

    const scrambler = (lengthOfArray) => {
      const scrambledArray = [];
      for (let i = 0; i < lengthOfArray; i++) {
        scrambledArray.push(random(charset));
      }
      return scrambledArray;
    };

    const scramble = (timer) => {
      if (terminated) {
        setScrambledText(text);
        window.clearInterval(timer);
        return;
      }

      setIteration((prevIteration) => prevIteration + 1);
      const scrambledArray = scrambler(text.length);

      if (iteration % magicNumber === 0) {
        setSpliceIteration((prevSpliceIteration) => prevSpliceIteration + 1);
      }

      replacer(scrambledArray, text.split(''), spliceIteration);

      const scrambledWord = scrambledArray.join('');
      setScrambledText(scrambledWord);

      if (spliceIteration === text.length) {
        window.clearInterval(timer);
      }
    };

    const intervalTimer = setInterval(() => {
      scramble(intervalTimer);
    }, interval);

    return () => {
      window.clearInterval(intervalTimer);
    };
  }, [duration, interval, charset, uppercase, text, iteration, spliceIteration, terminated]);

  const handleClick = () => {
    setTerminated(true);
  };

  return (
    <div onClick={handleClick} className="text-lg font-bold cursor-pointer">
      {scrambledText}
    </div>
  );
};

export default ScrambleText;
