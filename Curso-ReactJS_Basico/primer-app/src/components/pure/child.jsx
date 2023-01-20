import React, { useRef } from "react";

export default function Child({ name, send, update }) {
  const messageRef = useRef("");
  const nameRef = useRef("");

  function pulsarBoton() {
    const text = messageRef.current.value;
    alert(`Default ${text}`);
  }
  function pressButton(text) {
    alert(`Text: ${text}`);
  }
  function updateButton(e) {
    e.preventDefault();
    update(nameRef.current.value);
  }

  return (
    <div>
      <p onMouseOver={() => console.log("On Mouse Over")}>Hello, {name}</p>
      <button onClick={() => console.log("Botón 1 pulsado")}>Button 1</button>
      <button onClick={pulsarBoton}>Button 2</button>
      <button onClick={() => pressButton("Hello")}>Button 3</button>
      <input
        type="text"
        placeholder="Insert"
        onFocus={() => console.log("Input focuse")}
        onChange={(e) => console.log("Input Change", e.target.value)}
        onCopy={() => console.log("Copied text from Input")}
        ref={messageRef}
      />
      <button onClick={() => send("Hello este es el mensaje")}>
        Send Message
      </button>
      <div style={{ margin: "20px" }}>
        <form onSubmit={updateButton}>
          <input ref={nameRef} placeholder="New Name" />
          <button type="submit">Update Name</button>
        </form>
      </div>
    </div>
  );
}
