import React, {Component} from 'react';

/* TODO:

Create a decorator that will Create a HOC around Exercise4 and pass down an "enhanced" prop

BONUS: pass "enhance" a parameter to ALSO be passed down as a prop

*/

class Exercise4 extends Component {
  render() {
    const { enhanced } = this.props;

    return (
      <div>
        Exercise 4
        { enhanced ?  "I'm enhanced!" : "I'm not enhanced :(" }
      </div>
    )
  }
}

export default Exercise4;
