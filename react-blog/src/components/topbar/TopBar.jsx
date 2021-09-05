import { Link } from "react-router-dom";
import "./topbar.css";

function TopBar() {
	const user = true;
	return (
		<div className="top">
			<div className="topLeft">
				<i class="far fa-circle"></i>
			</div>
			<div className="topCenter">
				<ul className="topList">
					<li className="topListItem">
						<Link to="/" className="link">
							Home
						</Link>
					</li>
					<li className="topListItem">
						<Link to="/contact" className="link">
							Contact
						</Link>
					</li>
					<li className="topListItem">
						<Link to="/about" className="link">
							About
						</Link>
					</li>
					<li className="topListItem">
						<Link to="/write" className="link">
							Write
						</Link>
					</li>
				</ul>
			</div>
			<div className="topRight">
			<li className="topListItem">{user && "Logout"}</li>
				{user ? ( <Link to="/setting">
					<img
						src="https://images.unsplash.com/photo-1515191107209-c28698631303?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
						alt=""
						className="topImg"
					/></Link>
				) : (
					<ul className="topList">
						<li className="topListItem">
							<Link to="/login" className="link">
								Login
							</Link>
						</li>
						<li className="topListItem">
							<Link to="/register" className="link">
								Register
							</Link>
						</li>
					</ul>
				)}
				
				<i className="topSearchIcon fas fa-search"></i>
			</div>
		</div>
	);
}

export default TopBar;
