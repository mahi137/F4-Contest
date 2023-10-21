import React, { useState } from "react";

import "../index.css";

const TypingBox = () => {
  const [time, setTime] = useState(15);
  let displaytext =
    "eat happily low wooden fight me frighten distant solve move being tin improve guard unhappy band east capital noun myself strike thought turn weather scientist canal finger roll move wonder settlers camera traffic honor compass victory whose health vast ought fresh dog successful straw these of cheese simply answer finally";
    let keychar=0;
  return (
    <div className="typingBox">
      <div className="row-1">
        <div className="leftTime">{time}s</div>
        {/* <Button variant="contained" color="secondary">Contained</Button>
        <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button> */}
        <div className="rightTime">
          <button onClick={() => setTime(15)}>15s</button>
          <button onClick={() => setTime(30)}>30s</button>
          <button onClick={() => setTime(60)}>60s</button>
        </div>
      </div>
      <div className="text-box">
      {displaytext.split("").map((char)=>(<span key={'char'+(keychar++)}>{char}</span>))}
      </div>
    </div>
  
  );
};

export default TypingBox;
