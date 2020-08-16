import React, { useEffect } from "react";
import { useHttp } from "../hooks/HttpHook";

import "./CharPicker.css";

const CharPicker = ({ side, selectedCharacters, charSelectHandler }) => {
  //https://swapi.dev/api/people/
  const [isLoading, fetchedData] = useHttp("https://swapi.dev/api/people/", []);

  //to demonstrate how useEffect can be used when a state changes
  useEffect(() => {
    console.log("inside 2nd useEffect: ", isLoading);
  }, [isLoading]); // if there is a change in isLoading, console log is executed

  const chars = fetchedData
    ? fetchedData.data.results.map((char, index) => ({
        name: char.name,
        id: index + 1
      }))
    : [];

  let content = <p>Loading Characters....</p>;

  if (!isLoading && (chars || chars.length > 0)) {
    content = (
      <select
        className={side}
        value={selectedCharacters}
        onChange={charSelectHandler}
      >
        {chars.map((char) => (
          <option key={char.id} value={char.id}>
            {char.name}
          </option>
        ))}
      </select>
    );
  } else if (!isLoading && (!chars || chars.length === 0)) {
    content = <p>Could not fetch any data</p>;
  }
  return content;
};

export default CharPicker;
