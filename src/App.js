import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😉": "winking face",
  "😀": "grinning face",
  "😁": "beaming face with smiling eyes",
  "😂": "face with tear of joy",
  "🤣": "rolling on the floor laughing",
  "😊": "smiling face with smiling eyes",
  "😘": "face blowing a kiss",
  "❤️": "love and romance",
  "🤑": "Money-Mouth Face",
  "😚": "Kissing Face with Closed Eyes",
  "🤗": "Hugging Face",
  "🤭": "Smiling Face with Hand Over Mouth",
  "🤫": "Shushing Face",
  "🤔": "Thinking Face",
  "🤐": "Zipper-mouthed Face",
  "😐": "Neutral Face",
  "😑": "Expressionless Face"
};

var emojiList = Object.keys(emojiDictionary);

var headingText = "Emoji Interpreter😍";
var color = "green";

export default function App() {
  const [inputCounter, setChangeCounter] = useState("");

  const [meaning, setMeaning] = useState("");

  function inputViewHandler(event) {
    setChangeCounter(event.target.value);
  }

  function inputHandlerEvent(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our Database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var emojiMeaning = emojiDictionary[emoji];
    setMeaning(emojiMeaning);
  }

  return (
    <div className="App">
      <h1 style={{ backgroundColor: color }}>{headingText}</h1>
      <div>
        <input onChange={inputViewHandler} placeholder="Enter your name"></input>
      </div>
      <h2>
        Welcome <span style={{ color: "red" }}>{inputCounter}</span>
      </h2>
      <input onChange={inputHandlerEvent} placeholder="Enter emoji"></input>
      <h2>{meaning}</h2>
      {emojiList.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            style={{ fontSize: "2rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
