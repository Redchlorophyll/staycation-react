import React, { Component } from "react";
import { InputDate } from "components/form";

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div
        style={{
          width: "100%",
          marginTop: 80,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ width: 350 }}>
          <InputDate
            max={30}
            onChange={this.handleChange}
            name={"value"}
            value={this.state.value}
          />
        </div>
      </div>
    );
  }
}
