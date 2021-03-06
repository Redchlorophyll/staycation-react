import React from "react";
import propTypes from "prop-types";
import "./index.scss";

export default function Star(props) {
  const decimals = Number(props.value) % 1;
  const star = [];
  let leftPos = 0;

  for (let index = 0; index < 5 && index < props.value - decimals; index++) {
    leftPos += props.width;
    star.push(
      <div
        className="star"
        key={`star-${index}`}
        style={{
          left: index * props.width,
          width: props.width,
          height: props.height,
          marginRight: props.spacing,
        }}
      ></div>
    );
  }

  if (decimals > 0 && props.value <= 5) {
    star.push(
      <div
        className="star"
        key={`starWithDecimal`}
        style={{
          left: leftPos,
          height: props.height,
          width: decimals * props.width - props.spacing,
        }}
      ></div>
    );
  }

  const starPlaceHolder = [];
  for (let index = 0; index < 5; index++) {
    starPlaceHolder.push(
      <div
        className="star placeholder"
        key={`starPlaceholder-${index}`}
        style={{
          left: index * props.width,
          width: props.width,
          height: props.height,
          marginRight: props.spacing,
        }}
      ></div>
    );
  }

  return (
    <>
      <div
        className={["stars", props.className].join(" ")}
        style={{ height: props.height }}
      >
        {starPlaceHolder}
        {star}
      </div>
    </>
  );
}

Star.propTypes = {
  className: propTypes.string,
  value: propTypes.number,
  width: propTypes.number,
  height: propTypes.number,
  spacing: propTypes.number,
};
