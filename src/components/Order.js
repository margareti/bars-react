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

  render() {
    return (
        <div className="container">
          <h1>Your Last Order</h1>
          
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