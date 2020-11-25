import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectDateStart, startAction } from "../redux/reducers/recorder";

const addZero = (num: number) => (num < 10 ? `0${num}` : `${num}`);
const Recorder: React.FC = () => {
  const dateStart = useSelector(selectDateStart);
  const started = dateStart !== "";
  let interval = useRef<number>(0);
  const [, setCount] = useState(0);

  const dispatch = useDispatch();
  const clickHandle = () => {
    dispatch(startAction());
    interval.current = window.setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  };

  useEffect(() => {
    return () => {
      window.clearInterval(interval.current);
    };
  }, []);
  let seconds = started
    ? Math.floor((Date.now() - new Date(dateStart).getTime()) / 1000)
    : 0;
  const hours = seconds ? Math.floor(seconds / 3600) : 0;
  seconds -= hours * 3600;
  const minutes = seconds ? Math.floor(seconds / 60) : 0;
  seconds -= minutes * 60;
  return (
    <>
      <div className="text-center">
        <div>
          {addZero(hours)}:{addZero(minutes)}:{addZero(seconds)}
        </div>
        <button onClick={clickHandle} className="btn btn-primary">
          Start
        </button>
      </div>
    </>
  );
};

export default Recorder;
