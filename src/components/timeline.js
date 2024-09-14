import React from "react";
import Button from "./button";

const Timeline = ({ timeline, onTimelineClicked, currentStep }) => {
  return (
    <>
      <h2>History</h2>
      {timeline.map((_, index) => {
        let text = `Langkah #${index}`;

        if (index === 0) {
          text = "Mulai dari awal!";
        }
        return (
          <Button
            key={index}
            onClick={() => {
              onTimelineClicked(index);
            }}
            active={currentStep === index}
          >
            {text}
          </Button>
        );
      })}
    </>
  );
};

export default Timeline;
