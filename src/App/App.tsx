import React, { useState, useEffect } from "react";
import axios from "axios";
import { computeHeadingLevel } from "@testing-library/react";

function App() {
  const [state, setstate] = useState<Array<{}>>([]);

  const fetch = () => {
    const url = "http://localhost:3001/events";
    const req = async () => {
      const response = await axios.get(url);
      const data = await response.data;
      setstate([...state, ...data]);
    };
    return req();
  };

  const compune = (state: any) => {
    return state.map((item: any, index: number) => (
      <div key={item.index}>
        <h2>{item.title}</h2>
        <img src={item.img} />
      </div>
    ));
  };

  useEffect(() => {
    console.log(fetch());
    return () => {};
  }, []);
  return (
    <div>
      {compune(state)}
      <div></div>
    </div>
  );
}

export default App;
