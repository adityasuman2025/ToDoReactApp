class AddToDO extends React.Component
{
	state = {
		content: ''
	}

	handleChange = (e) =>
	{
		this.setState({
			content: e.target.value
		});		
	}

	handleSubmit = (e) =>
	{
		e.preventDefault();

		if(this.state.content != null && this.state.content.length != 0)
		{
			this.props.addToDo(this.state.content);

			this.setState({
				content: ''
			})
		}
	}

	render()
	{
		return(
			<form className = "AddToDoForm" onSubmit = {this.handleSubmit}>
				<span>Add new to-do: </span>
				<input type="text" onChange = {this.handleChange}  value= {this.state.content} />
			</form>
		)
	}
}