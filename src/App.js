import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const options = ["A", "B", "C", "D", "E"];

  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");
  const [optionC, setOptionC] = useState("");
  const [optionsA, setOptionsA] = useState([]);
  const [optionsB, setOptionsB] = useState([]);
  const [optionsC, setOptionsC] = useState([]);
  useEffect(() => {
    setOptionsA(
      options.filter((item) => {
        return item != optionB && item != optionC;
      })
    );
  }, [optionB, optionC]);
  useEffect(() => {
    setOptionsB(
      options.filter((item) => {
        return item != optionA && item != optionC;
      })
    );
  }, [optionA, optionC]);
  useEffect(() => {
    setOptionsC(
      options.filter((item) => {
        return item != optionB && item != optionA;
      })
    );
  }, [optionB, optionA]);

  function handleChangeA(e) {
    setOptionA(e.target.value);
  }
  function handleChangeB(e) {
    setOptionB(e.target.value);
  }
  function handleChangeC(e) {
    setOptionC(e.target.value);
  }
  function ShowResult() {
    console.log("opttion1 :" + optionA);
    console.log("opttion2 :" + optionB);
    console.log("opttion3 :" + optionC);
  }
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          direction: "row",
          alignItems: "center",
          justifyContent: "center",
          margin: "10px"
        }}
      >
        <div>
          <select value={optionA} onChange={handleChangeA}>
            <option value="" disabled selected>
              select Value
            </option>
            {optionsA.map((items) => {
              return <option value={items}>{items}</option>;
            })}
          </select>
        </div>
        <div>
          <select value={optionB} onChange={handleChangeB}>
            <option value="" disabled selected>
              select Value
            </option>
            {optionsB.map((items) => {
              return <option value={items}>{items}</option>;
            })}
          </select>
        </div>
        <div>
          <select value={optionC} onChange={handleChangeC}>
            <option value="" disabled selected>
              select Value
            </option>
            {optionsC.map((items) => {
              return <option value={items}>{items}</option>;
            })}
          </select>
        </div>
      </div>
      <button onClick={ShowResult}>Console the result</button>
    </div>
  );
}
