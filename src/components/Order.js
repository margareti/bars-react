import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startGetLastOrder } from '../actions/orders';
import BackButton from '../components/BackButton';

export class Order extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.getOrder();
  }

  renderOrderItem(orderItem) {
    return (
      <li key={orderItem.id} className="flex__row">
        <div>
          <img className="flex__img" src={orderItem.imageUrl}/> 
        </div>{orderItem.name} | Quantity: {orderItem.quantity}
      </li>)
  }

  render() {
    return (
      <div className="container">
        <BackButton />
        <h1 >Your Last Order</h1>
        <h2 className="flex__row separator" >
          <div><img className="flex__img" src={this.props.order && this.props.order.bar.imageUrl} /></div>
          <span>{this.props.order && this.props.order.bar.name}</span>
        </h2>
        
        <ul className="separator">
          {this.props.order && this.props.order.orderedBeverages.map(this.renderOrderItem)}
        </ul>
        <h3>Total: {this.props.order && this.props.order.totalAmount}</h3>
      </div>
      )
  }
}

const orderMapStateToProps = (state) => {
  return {
    order: state.orders.lastOrder
  }
}

const orderDispatchToProps = (dispatch) => ({
  getOrder: () => dispatch(startGetLastOrder())
});

export default connect(orderMapStateToProps, orderDispatchToProps)(Order);