import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
render(){
  return (
  	<div>
  	<p>{ this.props.todo.title}</p>
  	</div>
  	)
}
}
//PropTypes
TodoItem.propTypes = {
	todos: PropTypes.object.isRequired
}

export default TodoItem;