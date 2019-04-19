const ListToDos = (props) =>
{
	var todos = props.todos;
	console.log(todos);

	var toDoList = todos.length ? (
			todos.map(todo =>
			{
				return(
					<div className="listToDoDiv" key={todo.id}>
						<span>{todo.content}</span>
					</div>
				)
			})
		) : (
		<p className="error">You have no todo's left</p>);

	return(
		<div className="toDosContainer">
			{toDoList}
		</div>
	)
}