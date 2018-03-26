import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startGetBar } from '../actions/bars';
import { saveOrder } from '../actions/bars';

export class BarPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      barId: this.props.match.params.id,

    }
  }

  componentWillMount() {
    console.log('in will mount', this.props)
    this.props.getBar(this.state.barId);
    // this.props.saveOrder([{'name': 'Leffe'},{'name': 'Corona'}]);
  }

  handleItemChange() {
    console.log('handle item change')
  }

  renderMenuItem(menuItem) {
    return (
      <li key={menuItem.product.id} value={menuItem.id}>
        <input type="checkbox" id={menuItem.product.id} />
        <label htmlFor={menuItem.product.id}>
          {menuItem.product.name} | <span>Price: {menuItem.price}</span>
        </label> | Quantity:
        <input type="number" defaultValue="1" />
      </li>)
  }

  composeOrder() {
    console.log('props in compose order')
    this.props.saveOrder([{'name': 'Leffe'},{'name': 'Corona'}]);
  }

  render() {
    console.log(this.props)
    return (
      <div className="container">
      <h1>Bar name: {this.props.currentBar && this.props.currentBar.bar.name}</h1>
      <h3>Menu</h3>
      <form onSubmit={this.composeOrder}>
        <ul>
          {this.props.currentBar && this.props.currentBar.menu.map(this.renderMenuItem)}
        </ul>
      </form>
      <div>
        <button onClick={ this.composeOrder } className="button button--sm" to={ `/order` }>Submit Order!</button>
      </div>
    </div>
    )
  }
}

const barMapStateToProps = (state) => {
  console.log(state.bars)
  return {
    currentBar: state.bars.currentBar
  }
}

const barDispatchToProps = (dispatch) => ({
  getBar: (id) => dispatch(startGetBar(id)),
  saveOrder: (order) => dispatch(saveOrder(order))
});

export default connect(barMapStateToProps, barDispatchToProps)(BarPage);



// <Link className="button button--sm" to={ `/order` }>Submit Order!</Link>
