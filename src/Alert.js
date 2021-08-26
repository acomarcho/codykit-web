import React, { useEffect } from "react";

const Alert = ({ state, dispatch }) => {
  useEffect(() => {
    const closeInterval = setInterval(() => {
      dispatch({ type: "CLOSE_ALERT" });
    }, 2000);

    return () => {
      clearInterval(closeInterval);
    };
  }, [state.showAlert, dispatch]);
  return (
    <div className={`alert ${state.showAlert ? "show-alert" : null}`}>
      <p>{`[!] ${state.alertText}`}</p>
    </div>
  );
};

export default Alert;
