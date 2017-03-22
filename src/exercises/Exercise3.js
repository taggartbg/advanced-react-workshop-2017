import React, {Component} from 'react';

/* TODO:

Create a HOC function that will wrap Exercise3 and fetch data from mockFetch and pass it down

*/

function mockFetch() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve({
        myFakeKey: 'myFakeValue'
      })
    }, 500);
  )}
}

class Exercise3 extends Component {
  render() {
    const { data } = this.props;

    return (
      <div>
        Exercise 3
        Fetched data: { data }
      </div>
    )
  }
}

export default Exercise3;
