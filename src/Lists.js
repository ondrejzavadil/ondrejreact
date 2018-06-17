import React, { Component } from 'react';

class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.numbers = props.numbers;
    this.array = this.array.bind(this);
  }

  render() {
    return (
      <ul>
        {this.array()}
      </ul>
    );
  }

  array() {
    console.log("hello");
    const listIntems = this.numbers.map((number) => {
      console.log('hi' + number.toString());
      return <li key={number.toString()}>{number}</li>;
    });

    return listIntems;
  }
}

export default Lists