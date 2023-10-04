import { MouseEvent } from "react";

function ListGroup() {
	const items = ["bash", "sh", "ksh", "zsh", "bsh"];
	// items.map((item) => <li className="list-group-item">{item}</li>);

	const handleClick = (event: MouseEvent) => console.log(event);

	return (
		<>
			<h1>List</h1>
			<ul className="list-group">
				{/* <li className="list-group-item">Cras justo odio</li>
				<li className="list-group-item">Dapibus ac facilisis in</li>
				<li className="list-group-item">Morbi leo risus</li>
				<li className="list-group-item">Porta ac consectetur ac</li>
				<li className="list-group-item">Vestibulum at eros</li> */}
				{items.map((item, index) => (
					<li
						className="list-group-item"
						key={index}
						onClick={handleClick}
					>
						{item}
					</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
