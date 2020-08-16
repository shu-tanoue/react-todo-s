import React, { useState } from "react";
import cx from "classnames";
import "./styles.css";

import Header from "./components/Header";
import CharPicker from "./components/CharPicker";
import Character from "./components/Character";

const App = () => {
  const [state, setState] = useState({
    selectedCharacters: 1,
    side: "light",
    destroyed: false
  });

  const charSelectHandler = (event) => {
    const charId = event.target.value;
    setState({ ...state, selectedCharacters: charId });
  };

  const destructionHandler = () => {
    setState({ ...state, destroyed: true });
  };

  const sideHandler = (side) => {
    setState({ ...state, side });
  };

  let content = (
    <>
      <Header />
      <div
        className={cx("main-section", {
          "light-side": state.side === "light",
          "dark-side": state.side === "dark"
        })}
      >
        <CharPicker
          side={state.side}
          selectedCharacters={state.selectedCharacters}
          charSelectHandler={charSelectHandler}
        />
        <Character selectedCharacters={state.selectedCharacters} />
      </div>
      <div className="msg">
        <button className="btn subbtn" onClick={() => sideHandler("light")}>
          Light Side
        </button>
        <button className="btn subbtn" onClick={() => sideHandler("dark")}>
          Dark Side
        </button>
        <button
          className="btn subbtn"
          onClick={destructionHandler}
          disabled={state.side === "dark" ? false : true}
        >
          DESTROY!
        </button>
      </div>
    </>
  );

  if (state.destroyed) {
    content = <h1>Total destruction!</h1>;
  }

  return content;
};

export default App;
