import React, {Component} from 'react';

/* TODO:

Create a decorator that will replace a class method with a memoized version of the same method

*/

class Exercise6 extends Component {
  toUpperCase(inputString) {
    return inputString.toUpperCase();
  }

  render() {
    return (
      <div>
        Exercise 6
        { this.toUpperCase('exercise 6 is my favorite so far!') }
        { this.toUpperCase('exercise 6 is my favorite so far!') }
      </div>
    )
  }
}

export default Exercise6;
