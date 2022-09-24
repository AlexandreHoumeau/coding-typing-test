import React, { useEffect, useState } from 'react';

import { Component } from '@/utils/data';

export const TextEditor = () => {
  const [text, setText] = useState<string[]>([]);

  useEffect(() => {
    // const sentences = Component
    setText(Component.split(/\r?\n|\r|\n/g));
    console.log(Component.split(/\r?\n|\r|\n/g));
  }, []);
  return (
    <div className="">
      {text.map((sentence, indexSentence) => (
        <div className=" grid grid-cols-10" key={indexSentence}>
          <div className="col-span-1 bg-slate-300 text-center">
            {indexSentence + 1}
          </div>
          <div className="col-span-9 flex bg-slate-200 px-2">
            {sentence.split('').map((word, index) => (
              <div key={word + index}>
                {word.split('').map((letter, letterIndex) => (
                  <div key={letter + letterIndex}>
                    {letter === ' ' ? '\u00a0\u00a0' : letter}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
