import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "COMPUTER AND NETWORK ENGINEER",
          "FRONTEND DEVELOPER",
          "UI/UX DESIGNER",
          "CONTENT CREATOR",
          "VIDEO EDITOR",
          "FREELANCER",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
