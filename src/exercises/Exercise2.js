import React, {Component} from 'react';

/* TODO:

Create a HOC function that will wrap Exercise2 and seed it with an 'enhanced' prop that is simply 'true'

*/

class Exercise2 extends Component {
  render() {
    const { enhanced } = this.props;

    return (
      <div>
        Exercise 2
        { enhanced ?  "I'm enhanced!" : "I'm not enhanced :(" }
      </div>
    )
  }
}

export default Exercise2;
