import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [enterplayerName, setEnterPlayerName] = useState(null);
  function clickhandle() {
    setEnterPlayerName(playerName.current.value);
    playerName.current.value = "";
  }
  return (
    <section id="player">
      <h2>Welcome {enterplayerName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={clickhandle}>Set Name</button>
      </p>
    </section>
  );
}
