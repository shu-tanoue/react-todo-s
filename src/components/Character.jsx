import React, { useState, useEffect } from "react";
import Summary from "./Summary";

const Character = ({ selectedCharacters }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadedCharacter, setLoadedCharacter] = useState({});

  useEffect(() => {
    //run a function
    fetchData();
  }, [selectedCharacters]);

  const fetchData = () => {
    console.log(
      "Sending HTTP request for new character with id: ",
      selectedCharacters
    );
    setIsLoading(true);

    fetch("https://swapi.dev/api/people/" + selectedCharacters + "/")
      .then((response) => {
        // console.log(resp);
        if (!response.ok) {
          throw new Error("Could not fetch character!");
        }
        return response.json();
      })
      .then((charData) => {
        setLoadedCharacter(charData);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  let content = <p>Loading Character...</p>;

  if (!isLoading && loadedCharacter) {
    content = <Summary {...loadedCharacter} />;
  } else {
    content = <p>Failed to fetch character</p>;
  }

  return content;
};

export default Character;
