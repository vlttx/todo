import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
	getStyle =() => {
		return {
			background: '#f4f4f4',
			padding: '10px',
			borderBottom: '1px #ccc dotted',
			textDecoration: this.props.todo.completed ? 'line-through' : 'none'
		}
		}
render(){
  return (
  	<div style= {this.getStyle()}>
  	<p>
  	<input type="checkbox" /> {' '}	
  	{ this.props.todo.title}
  	</p>
  	</div>
  	)
}
}
//PropTypes
TodoItem.propTypes = {
	todos: PropTypes.object.isRequired
}

// const itemStyle = {
// 	backgroundColor: '#f4f4f4'
// }
// can be used for style but using function instead because we need
// more functionality, i.e. if the item is complete it will be crossed out
export default TodoItem;