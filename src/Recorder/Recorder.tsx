import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectDateStart, startAction } from "../redux/reducers/recorder";

const Recorder: React.FC = () => {
  const dateStart = useSelector(selectDateStart);
  const dispatch = useDispatch();
  const clickHandle = () => {
    dispatch(startAction());
  };
  return (
    <>
      <div className="text-center">
        <div>{dateStart}</div>
        <button onClick={clickHandle} className="btn btn-primary">
          Start
        </button>
      </div>
    </>
  );
};

export default Recorder;
