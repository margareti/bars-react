import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { startGetBars } from '../actions/bars';

export class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.chooseBar = this.chooseBar.bind(this);
  }

  chooseBar(e) {
    this.setState({chosenBar: e.target.value});
  }

  componentWillMount() {
    this.props.getBars();
  }

  renderBar(bar) {
    console.log('bar ', bar)
   return <option key={bar.id} value={bar.id}>{bar.name}</option>
  }

  render() {
    console.log('props', this.props)
    return (
      <div className="container">
        <h1>Welcome</h1>
        <p>Choose bar now</p>
        <select name="bars" value={this.state.chosenBar} onChange={this.chooseBar}>
          {this.props.bars && this.props.bars.length && this.props.bars.map(this.renderBar)}
        </select>
        <hr/>
        <div>
          <Link to={ `/bar/${this.state.chosenBar}` }>Go!</Link>
        </div>
      </div>
      )
  }
}

const mapStateToProps = (state) => {
  console.log('map state to props ', state.bars)
  return {
    bars: state.bars
  }
}

const barsDispatchToProps = (dispatch) => ({
  getBars: () => dispatch(startGetBars())
});

export default connect(mapStateToProps, barsDispatchToProps)(HomePage);

