import React, {Component} from 'react';
import perf from 'react-addons-perf';
window.perf = perf;
/* TODO:

Performance test this component, checking for wasted renders

*/

class Exercise7 extends Component {
  constructor(props) {
    super();
    this.state = {
      USStates: ["Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District Of Columbia", "Federated States Of Micronesia", "Florida", "Georgia", "Guam", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Marshall Islands", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Northern Mariana Islands", "Ohio", "Oklahoma", "Oregon", "Palau", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virgin Islands", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
    }
    this.handleClick = this.handleClick.bind(this);
  }

  // handleClick(evt) {
  //   console.log(evt.target.innerHTML);
  // }

  handleClick(val) {
    console.log(val);
  }

  render() {

    return (
      <div>
        Exercise 7
        <ul>
          {
            this.state.USStates.map((USState, index) => (
              <li key={index} onClick={() => (this.handleClick(USState))}>{this.state.states[index]}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default Exercise7;
