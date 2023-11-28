import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initCount,
    };
    console.log("1. constructor");
    // 1. KHỞI TẠO CÁC GIÁ TRỊ MẶC ĐỊNH
  }
  handleIncrement = () => {
    console.log("2. render");
    // Cập nhật State
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default Counter;
