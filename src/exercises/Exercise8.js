import React, {Component} from 'react';

/* TODO:

Performance test this render cycle

How can I fix our performance concerns with shouldComponentUpdate?

What about React.PureComponent?

*/

class Exercise8 extends Component {
  constructor(props) {
    super();
    this.state = {
      USStates: ["Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District Of Columbia", "Federated States Of Micronesia", "Florida", "Georgia", "Guam", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Marshall Islands", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Northern Mariana Islands", "Ohio", "Oklahoma", "Oregon", "Palau", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virgin Islands", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
    }
  }

  render() {
    const { USStates } = this.state;

    return (
      <div>
        Exercise 8
        <ul>
          {
            USStates.map((USState) => {
              return <StateListItem key={state} USState={USState} />
            })
          }
        </ul>
      </div>
    )
  }
}

class StateListItem extends Component {
  render() {
    const {USState} = this.props;

    return <li>USState</li>
  }
}

export default Exercise8;
