import { useEffect } from "react";
import { useState } from "react";
import style from "styles/Toolbox";
import useSWR from "swr";

const Toolbox = () => {
  const [text, setText] = useState("");

  return (
    <div className="toolbox">
      This is Tool Box
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <span className="sep">asdf</span>
      <div>{errorMsg}</div>
      <style jsx>{style}</style>
      <style jsx>{`
        .toolbox {
          color: ${text.length % 2 === 0 && "salmon"};
        }
      `}</style>
    </div>
  );
};

export default Toolbox;
