import React from "react";
import "./CountDown.scss";
import Countdown from "react-countdown";

const CountDown = () => {
  const Completionist = () => <span>You are good to go!</span>;
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span className="time">
          <span className="hours">{hours}</span><b>:</b>
          <span className="minutes">{minutes}</span><b>:</b>
          <span className="seconds">{seconds}</span>
        </span>
      );
    }
  };

  return (
    <div class="countdown mt-3 mb-5 container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <h2>Live Show Will Start in</h2>
        </div>
        <div class="col-lg-4">
          <div className="countdown-date">
            <Countdown date={Date.now() + 100905000} renderer={renderer} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
