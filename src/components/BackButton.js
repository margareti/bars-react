import React from 'react';
import { withRouter } from 'react-router';


export class BackButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { history } = this.props;
    return (
      <div className="back">
         <button onClick={history.goBack}> &#8592;Back</button>
      </div>
    )
  }
}

export default withRouter(BackButton);
