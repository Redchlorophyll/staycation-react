import React, { Component } from "react";
import { InputDate } from "components/form";
import Breadcrumb from "components/Breadcrumb";

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
    this.breadcrumbList = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];
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

          <Breadcrumb data={this.breadcrumbList} />
        </div>
      </div>
    );
  }
}
