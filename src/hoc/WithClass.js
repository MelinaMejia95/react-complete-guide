import React, { Component } from 'react';

//Never manipulates the wrapped component, just use it
/* const withClass = (WrappedComponent, className) => {
  return (props) => (
    <div className={className}>
      <WrappedComponent {...props}/> 
    </div>
  )
} */

//In case you need a Stateful component
const withClass = (WrappedComponent, className) => {
  const WithClass =  class extends Component {
    render () {
      return (
        <div className={className}>
          <WrappedComponent ref={this.props.forwardRef} {...this.props}/> 
        </div>
      );
    }
  }

  return React.forwardRef((props, ref) => {
    return <WithClass {...props} forwardRef={ref} />
  });

}  

export default withClass;