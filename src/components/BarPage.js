import React from 'react';

export class BarPage extends React.Component {
  constructor() {
    super();

    this.state = {
      barMenu: {
        1: [{
          name: "beer",
          price: 3
        }, {
          name: "wine",
          price: 4
        }],
        2: [{
          name: "whiskey",
          price: 4
        }, {
          name: "coca cola",
          price: 2
        }]
      }
    }
  }


  render() {
    return (
      <div className="container">
      <h1>Bar name: Margarita's Bar</h1>
      <h3>Menu</h3>
      <ul>
        <li>Beer <a>Choose</a></li>
        <li>Wine <a>Choose</a></li>
        <li>Whiskey <a>Choose</a></li>
      </ul>
    </div>
    )
  }
}

export default BarPage;


// const BarPage = (props) => (
//   <div className="container">
//     <h1>Bar name: Margarita's Bar</h1>
//     <h3>Menu</h3>
//     <ul>
//       <li>Beer <a>Choose</a></li>
//       <li>Wine <a>Choose</a></li>
//       <li>Whiskey <a>Choose</a></li>
//     </ul>
//   </div>
// );

// export default BarPage;
