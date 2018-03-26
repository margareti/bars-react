import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getOrder } from '../actions/bars';

export class Order extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.getOrder();
  }

  renderOrderItem(orderItem) {
    return (
      <li key={orderItem.product.id} >
          {orderItem.product.name} | <span>Price: {orderItem.price}</span> | Quantity: 1{orderItem.quantity}
      </li>)
  }

  render() {
    return (
        <div className="container">
          <h1>Your Last Order</h1>
          <ul>
            {this.props.order && this.props.order.map(this.renderOrderItem)}
          </ul>
        </div>
      )
  }
}

const orderMapStateToProps = (state) => {
  console.log('order', state)
  return {
    order: state.bars.order
  }
}

const orderDispatchToProps = (dispatch) => ({
  getOrder: () => dispatch(getOrder())
});

export default connect(orderMapStateToProps, orderDispatchToProps)(Order);