import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startGetLastOrder } from '../actions/bars';

export class Order extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.getOrder();
  }

  renderOrderItem(orderItem) {
    return (
      <li key={orderItem.id} >
          Product Id: {orderItem.id} | Quantity: {orderItem.quantity}
      </li>)
  }

  render() {
    return (
        <div className="container">
          <h1>Your Last Order</h1>
          <h2>from BarId: <span>{this.props.order && this.props.order.barId}</span></h2>
          <ul>
            {this.props.order && this.props.order.orderedProducts.map(this.renderOrderItem)}
          </ul>
        </div>
      )
  }
}

const orderMapStateToProps = (state) => {
  console.log('order', state)
  return {
    order: state.bars.lastOrder
  }
}

const orderDispatchToProps = (dispatch) => ({
  getOrder: () => dispatch(startGetLastOrder())
});

export default connect(orderMapStateToProps, orderDispatchToProps)(Order);