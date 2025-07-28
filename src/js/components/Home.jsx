import React, { useState } from "react";


//create your first component
const Home = () => {

	const [task, setTask] = useState("");
	const [tasks, setTasks] = useState([]);
	const deleteTask = (indexToDelete) => {
		setTasks(tasks.filter((_, index) => index !== indexToDelete));
	}


	return (
		<div className="container">

			<h1 className="text-center mt-5" style={{ color: 'lightpink', fontWeight: '300' }}>todos</h1>
			<ul className="list-group mt-3">

				<li className="list-group-item">
					<input
						type="text"
						className="form-control"
						placeholder="What needs to be done?"
						value={task}
						onChange={(e) => {
							setTask(e.target.value)
							console.log("On change: ", e.target.value);

						}}
						onKeyDown={(e) => {
							console.log("onKeyDown: ", e.key);
							if (e.key === "Enter" && task.trim() != "") {
								setTasks([...tasks, task]);
								setTask("");
							}
						}}

					/>
				</li>

				{tasks.length === 0 ? (
					<li className="list-group-item">No tasks, add a task</li>
				) : (
					tasks.map((t, index) => (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between align-items-center"
						>
							{t}
							<span
								className="delete-btn text-danger"
								onClick={() => deleteTask(index)}
								style={{ cursor: "pointer" }}
							>
								X
							</span>
						</li>
					))
				)}
			</ul>


		</div>
	);
};

export default Home;