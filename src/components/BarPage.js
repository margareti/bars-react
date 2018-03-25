import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startGetBar } from '../actions/bars';
import { startSaveOrder } from '../actions/orders';
import { Redirect } from 'react-router';
import BackButton from '../components/BackButton';


export class BarPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      barId: this.props.match.params.id,
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
      const newMenu = nextProps.currentBar.menu.map(item => Object.assign({}, item, {quantity: 0}))
      this.setState({ menu: newMenu })
    }
  }

  handleItemChange(e, item) {

    const newOrders = this.state.menu.map((menuItem) => {
      if (menuItem.id === item.id) {
        menuItem.checked = e.target.checked;
        menuItem.quantity = menuItem.quantity ? menuItem.quantity : 1;
      }
    })
    this.setState({ order: newOrders });
  }

  handleItemQuantity(e, item) {

    const newMenuItems = this.state.menu
      .map(selectedItem => selectedItem.id === item.id ? Object.assign({}, selectedItem, {quantity: parseInt(e.target.value, 10)}) : selectedItem);
    this.setState({ menu: newMenuItems });
  }

  generateHandler(value, method) {
    return (e) => {
      return method(e, value)
    }
  }

  renderMenuItem(menuItem) {
    return (
      <li key={menuItem.id} value={menuItem.id}>
        <input type="checkbox" id={menuItem.id} onChange={this.generateHandler(menuItem, this.handleItemChange)}/>
        <label htmlFor={menuItem.id}>
          {menuItem.name} | <span>Price: {menuItem.price}</span>
        </label> | Quantity:
        <input type="number" min={menuItem.checked ? 1 : 0} value={menuItem.quantity} onChange={this.generateHandler(menuItem, this.handleItemQuantity)}/>
      </li>)
  }

  composeOrder() {
    if (!this.state.menu.length) return;

    const orders = {
      barId: this.state.barId,
      orderedProducts: this.state.menu.filter(item => item.checked)
        .map(item => ({id: item.id, quantity: item.quantity })),
      orderedAt: new Date().toISOString()
    }

    this.props.saveOrder(orders).then(() => {
      this.props.history.push('/order');
    });
  }

  render() {
    console.log(this.state);
    console.log(this.props.history)
    return (
      <div className="container">
        <BackButton />
        <h1 className="separator">Bar name: {this.props.currentBar && this.props.currentBar.bar.name}</h1>
        <h3>Menu</h3>
        <p><i>Tick the checkbox on the left to include item in round</i></p>
        <form onSubmit={this.composeOrder} className="separator">
          <ul>
            {this.state.menu && this.state.menu.map(this.renderMenuItem)}
          </ul>
        </form>
        <p>Total: {Math.floor(this.state.menu.reduce((accumulator, currentValue) => {
          return currentValue.checked ? accumulator + (currentValue.price * currentValue.quantity) : accumulator
        }, 0) * 100) / 100}</p>
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


