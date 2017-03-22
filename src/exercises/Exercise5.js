import React, {Component} from 'react';

/* TODO:

Create a decorator that will auto-bind the class method to the class instance

*/

class Exercise5 extends Component {
  constructor(props) {
    super();
    this.state = {
      data: [1,2,3]
    };

    this.getDataLength = this.getDataLength.bind(this);
  }

  getDataLength() {
    return this.state.data && this.state.data.length;
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        Exercise 5
        Initial data: { data.toString() }
        Data length: { this.getDataLength() }
      </div>
    )
  }
}

export default Exercise5;
