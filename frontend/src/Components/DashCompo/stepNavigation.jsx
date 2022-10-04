import React from "react";
import Step from "./steps";

export default function StepNavigation(props) {
  return (
    <div
      className="stepWrapper"
      style={{ border: "1px solid" }}
    >
      {props.labelArray.map((item, index) => (
        <Step
          key={index}
          index={index}
          label={item}
          updateStep={props.updateStep}
          selected={props.currentStep === index + 1}
        ></Step>
      ))}
    </div>
  );
}
