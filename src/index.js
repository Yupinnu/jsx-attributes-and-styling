import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <div>
      <img
        className="dog-img"
        src="https://i.ytimg.com/vi/hPsHAABCbRk/maxresdefault.jpg"
      />
      <img
        className="dog-img"
        src="https://i.ytimg.com/vi/EVqxcWQOEnU/maxresdefault.jpg"
      />
      <img
        className="dog-img"
        src="https://www.rd.com/wp-content/uploads/2017/10/These-Funny-Dog-Videos-Are-the-Break-You-Need-Right-Now_493370860-Jenn_C.jpg?resize=640,426"
      />
    </div>
  </div>,
  document.getElementById("root")
);
