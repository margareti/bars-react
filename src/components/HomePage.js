import React from 'react';
import { Link } from 'react-router-dom';

export class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      bars: [
      { id: 1,
        name: "The bar at the end of the universe",
        lat : 45.493185,
        lon : -122.6399857,
        image_url: "https://goo.gl/maps/BpYvxubFY2D2"},
      { id: 2,
        name: "Resto like home",
        lat : 48.8607105,
        lon : 2.3057088,
        image_url: "https://goo.gl/maps/xZCuv3KJccK2"}
     ]
    };
    this.state.chosenBar = this.state.bars.length ? this.state.bars[0].id : '';
    this.chooseBar = this.chooseBar.bind(this);
  }

  chooseBar(e) {
    this.setState({chosenBar: e.target.value});
    console.log(e.target.value);
  }

  render() {
    return (
      <div className="container">
        <h1>Welcome</h1>
        <p>Choose bar now</p>
        <select name="bars" value={this.state.chosenBar} onChange={this.chooseBar}>
          {this.state.bars.map(bar => <option key={bar.id} value={bar.id}>{bar.name}</option>)}
        </select>
        <hr/>
        <div>
          <Link to={ `/bar/${this.state.chosenBar}` }>Go!</Link>
        </div>
      </div>
      )
  }
}

export default HomePage;
