import "./topbar.css";

function TopBar() {
	return (
		<div className="top">
			<div className="topLeft">
				<i class="far fa-circle"></i>
			</div>
			<div className="topCenter">
				<ul className="topList">
					<li className="topListItem">Home</li>
					<li className="topListItem">Contact</li>
					<li className="topListItem">About</li>
					<li className="topListItem">Write</li>
					<li className="topListItem">Logout</li>
				</ul>
			</div>
			<div className="topRight">
				<img
					src="https://images.unsplash.com/photo-1515191107209-c28698631303?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
					alt=""
					className="topImg"
				/>
				<i className="topSearchIcon fas fa-search"></i>
			</div>
		</div>
	);
}

export default TopBar;
