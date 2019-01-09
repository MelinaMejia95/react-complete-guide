import React, { Component } from 'react';

//Never manipulates the wrapped component, just use it
const withClass = (WrappedComponent, className) => {
  return (props) => (
    <div className={className}>
      <WrappedComponent {...props}/> 
    </div>
  )
}

//In case you need a Stateful component
/* const withClass = (WrappedComponent, className) => {
  return class extends Component {
    render () {
      return (
        <div className={className}>
          <WrappedComponent {...this.props}/> 
        </div>
      );
    }
  }
}  */

export default withClass;