import React, { Component } from "react";

class NewTodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = { task: "" };
	}

	render() {
		return (
			<form>
				<label htmlFor='task'>New Todo</label>
				<input
					type='text'
					placeholder='New Todo'
					id='task'
					value={this.state.task}
					onChange={this.handleChange}
				/>
			</form>
		);
	}
}

export default NewTodoForm;
