import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "π": "winking face",
  "π": "grinning face",
  "π": "beaming face with smiling eyes",
  "π": "face with tear of joy",
  "π€£": "rolling on the floor laughing",
  "π": "smiling face with smiling eyes",
  "π": "face blowing a kiss",
  "β€οΈ": "love and romance",
  "π€": "Money-Mouth Face",
  "π": "Kissing Face with Closed Eyes",
  "π€": "Hugging Face",
  "π€­": "Smiling Face with Hand Over Mouth",
  "π€«": "Shushing Face",
  "π€": "Thinking Face",
  "π€": "Zipper-mouthed Face",
  "π": "Neutral Face",
  "π": "Expressionless Face"
};

var emojiList = Object.keys(emojiDictionary);

var headingText = "Emoji Interpreterπ";
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
