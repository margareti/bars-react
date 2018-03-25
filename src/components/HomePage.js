import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { startGetBars } from '../actions/bars';

export class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenBar: ''
    };
    this.chooseBar = this.chooseBar.bind(this);
  }

  chooseBar(e) {
    console.log('chosen bar ', e.target.value)
    this.setState({chosenBar: e.target.value});
  }

  componentWillMount() {
    this.props.getBars();
  }

  renderBar(bar) {
    return <option key={bar.id} value={bar.id}>{bar.name}</option>
  }

  render() {
    if (!this.state.chosenBar) {
      this.state.chosenBar = this.props.bars ? this.props.bars[0].id : '';
    }
    
    console.log('bar', this.state.chosenBar)
    return (
      <div className="container">
        <h1>Welcome</h1>
        <h3>Choose bar now:</h3>
        <select name="bars" value={this.state.chosenBar} onChange={this.chooseBar}>
          {this.props.bars && this.props.bars.map(this.renderBar)}
        </select>
        <hr/>
        <div>
          <Link className="button" to={ `/bar/${this.state.chosenBar}` }>Go!</Link>
        </div>
      </div>
      )
  }
}

const barsMapStateToProps = (state) => {
  console.log('state in homepage', state)
  return {
    bars: state.bars.data
  }
}

const barsDispatchToProps = (dispatch) => ({
  getBars: () => dispatch(startGetBars())
});

export default connect(barsMapStateToProps, barsDispatchToProps)(HomePage);

