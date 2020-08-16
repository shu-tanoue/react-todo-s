import React from "react";

import "./Summary.css";

const Summary = (props) => {
  return (
    <div className="summary">
      <h1>{props.name}</h1>
      <p>
        Gender: <span className="summary__output">{props.gender}</span>
      </p>
      <p>
        Height: <span className="summary__output">{props.height}</span>
      </p>
      <p>
        Hair color: <span className="summary__output">{props.hair_color}</span>
      </p>
      <p>
        Skin color: <span className="summary__output">{props.skin_color}</span>
      </p>
      {/* <p>
        Appears in # Movies:
        <span className="summary__output"> {props.films.length}</span>
      </p> */}
    </div>
  );
};

export default Summary;
