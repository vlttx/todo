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
	const { id, title } = this.props.todo;
  return (
  	<div style= {this.getStyle()}>
  	<p>
  	<input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}	
  	{ title}
  	<button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
  	</p>
  	</div>
  	)
}
}
//PropTypes
TodoItem.propTypes = {
	todos: PropTypes.object.isRequired
}
const btnStyle = {
	background: '#ff0000',
	color: '#fff',
	border: 'none',
	padding: '5px 9px',
	borderRadius: '50%',
	cursor: 'pointer',
	float: 'right'
}
// const itemStyle = {
// 	backgroundColor: '#f4f4f4'
// }
// can be used for style but using function instead because we need
// more functionality, i.e. if the item is complete it will be crossed out
export default TodoItem;