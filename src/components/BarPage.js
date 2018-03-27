import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startGetBar } from '../actions/bars';
import { startSaveOrder } from '../actions/bars';
import { Redirect } from 'react-router'

export class BarPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      barId: this.props.match.params.id,
      order: [],
      menu: []
    }

    this.composeOrder = this.composeOrder.bind(this);
    this.handleItemChange = this.handleItemChange.bind(this);
    this.handleItemQuantity = this.handleItemQuantity.bind(this);
    this.renderMenuItem = this.renderMenuItem.bind(this);
  }

  componentWillMount() {
    this.props.getBar(this.state.barId);
  }

  componentWillReceiveProps(nextProps) {
    let currentMenu = this.props.currentBar || {}
    if (currentMenu !== nextProps.currentBar.menu) {
      const newMenu = nextProps.currentBar.menu.map(item => Object.assign({}, item, {quantity: 1}))
      this.setState({ menu: newMenu })
    }
  }

  handleItemChange(e, item) {
    const ordered = {
      id: item.product.id,
      quantity: item.quantity
    };

    let alreadyExistingId = null;

    const isOrdered = this.state.order.some((item, index) => {
      if (item.id === ordered.id) {
        alreadyExistingId = index;
        return true;
      };
    });

    if (!isOrdered) {
      this.state.order.push(ordered);
    } else {
      this.state.order = this.state.order.splice(1, alreadyExistingId);
    }
  }

  handleItemQuantity(e, item) {
    item.quantity = e.target.value;

  }

  generateHandler(value, method) {
    return (e) => {
      return method(e, value)
    }
  }

  renderMenuItem(menuItem) {
    return (
      <li key={menuItem.product.id} value={menuItem.id}>
        <input type="checkbox" id={menuItem.product.id} onChange={this.generateHandler(menuItem, this.handleItemChange)}/>
        <label htmlFor={menuItem.product.id}>
          {menuItem.product.name} | <span>Price: {menuItem.price}</span>
        </label> | Quantity:
        <input type="number" onChange={this.generateHandler(menuItem, this.handleItemQuantity)}/>
      </li>)
  }

  composeOrder() {
    if (!this.state.order.length) return;
    const orders = {
      barId: this.state.barId,
      orderedProducts: this.state.order.slice(0),
      orderedAt: new Date().toISOString()
    }
    this.props.saveOrder(orders);
    this.props.history.push('/order');
  }

  render() {
    return (
      <div className="container">
      <h1>Bar name: {this.props.currentBar && this.props.currentBar.bar.name}</h1>
      <h3>Menu</h3>
      <form onSubmit={this.composeOrder}>
        <ul>
          {this.state.menu && this.state.menu.map(this.renderMenuItem)}
        </ul>
      </form>
      <div>
        <button onClick={ this.composeOrder } className="button">Submit Order!</button>
      </div>
    </div>
    )
  }
}

const barMapStateToProps = (state) => {
  return {
    currentBar: state.bars.currentBar
  }
}

const barDispatchToProps = (dispatch) => ({
  getBar: (id) => dispatch(startGetBar(id)),
  saveOrder: (order) => dispatch(startSaveOrder(order))
});

export default connect(barMapStateToProps, barDispatchToProps)(BarPage);


