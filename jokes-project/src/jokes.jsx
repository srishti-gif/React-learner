import React from "react";

export default function Joke(props) {
  const [isShown, setIsShown] = React.useState(false);

  function toggleShown() {
    setIsShown((prevShown) => !prevShown);
  }

  /**
   * Challenge:
   * Only display the punchline paragraph if `isShown` is true
   */

  return (
    <div>
      {props.setup && <h3>{props.setup}</h3>}
      {isShown && <p>{props.punchline}</p>}
      {isShown &&<button onClick={toggleShown}>Hide punchline</button> }
      {!isShown&&<button onClick={toggleShown}>Show punchline</button>}
      <hr />
    </div>
  );
}
