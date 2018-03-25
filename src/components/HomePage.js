import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { startGetBars } from '../actions/bars';

export class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.chooseBar = this.chooseBar.bind(this);

    this.props.bars ? this.props.bars : [];
  }

  chooseBar(e) {
    this.setState({chosenBar: e.target.value});
  }

  componentWillMount() {
    this.props.getBars();
  }

  render() {
    return (
      <div className="container">
        <h1>Welcome</h1>
        <p>Choose bar now</p>
        <select name="bars" value={this.state.chosenBar} onChange={this.chooseBar}>
          {this.props.bars.map(bar => <option key={bar.id} value={bar.id}>{bar.name}</option>)}
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
  return {
    bars: state.bars
  }
}

const barsDispatchToProps = (dispatch) => ({
  getBars: () => dispatch(startGetBars())
});

export default connect(mapStateToProps, barsDispatchToProps)(HomePage);

