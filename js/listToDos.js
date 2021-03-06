const ListToDos = (props) =>
{
	var todos = props.todos;
	
	//var deleteToDo = props.deleteToDo;

	var toDoList = todos.length ? (
			todos.map(todo =>
			{
				return(
					<div className="listToDoDiv" key={todo.id} onClick = {props.deleteToDo.bind(null, todo.id)} >
						{todo.content}
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