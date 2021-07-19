import React, { useState } from "react";
import "./styles.css";

//var birthdayList = ["cake", "Balloon", "cold drinks", "gifts", "chocolates"];

const emojiDictionary = {
  "😉": "winking face",
  "😀": "grinning face",
  "😁": "beaming face with smiling eyes",
  "😂": "face with tear of joy",
  "🤣": "rolling on the floor laughing",
  "😊": "smiling face with smiling eyes",
  "😘": "face blowing a kiss"
};

var emojiList = Object.keys(emojiDictionary);

var headingText = "Hello Friends😍";
//var userName = prompt('give me your name');
var userName = "Anurag";
var color = "green";
//var likeCounter = 0;

export default function App() {
  const [likeCounter, setLikeCounter] = useState(0);
  const [inputCounter, setChangeCounter] = useState("");

  const [meaning, setMeaning] = useState("");

  function inputViewHandler(event) {
    //console.log(event.target.value);
    //console.log(event.target);
    setChangeCounter(event.target.value);
  }

  function likeClickHandler() {
    //console.log("Clicked");
    setLikeCounter(likeCounter + 1);
  }
  //console.log("Clicked",likeCounter);

  function inputHandlerEvent(event) {
    //console.log(event.target.value);
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our Database";
    }
    // console.log(meaning);
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var emojiMeaning = emojiDictionary[emoji];
    setMeaning(emojiMeaning);
  }

  return (
    <div className="App">
      <h1 style={{ backgroundColor: color }}>{headingText}</h1>
      <h2 style={{ backgroundColor: "blue" }}>
        Welcome<span style={{ color: "red" }}> {userName} </span>to FunSandBox!
      </h2>
      <div>
        <input onChange={inputViewHandler}></input>
      </div>
      <button onClick={likeClickHandler}>Like me</button> {likeCounter}
      <h2>Welcome {inputCounter}</h2>
      <input onChange={inputHandlerEvent}></input>
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

/**
 *
 * viser -- view->interact->state in event handler ->
 * Render -> output on the screen
 */
