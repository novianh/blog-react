import "./sidebar.css";

function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebarItem">
				<span className="sidebarTitle">About Me</span>
				<img
					src="https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
					alt="about me"
				/>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est numquam
					eligendi a molestiae amet laudantium, quos blanditiis quis.
				</p>
			</div>
			<div className="sidebarItem">
				<span className="sidebarTitle">Categories</span>
				<ul className="sidebarList">
					<li className="sidebarListItem">Life</li>
					<li className="sidebarListItem">Music</li>
					<li className="sidebarListItem">Tech</li>
					<li className="sidebarListItem">Art</li>
					<li className="sidebarListItem">Cinema</li>
				</ul>
			</div>
			<div className="sidebarItem">
				<span className="sidebarTitle">Follow Us</span>
				<div className="sidebarSocial">
					<i className="sidebarIcon fab fa-instagram-square"></i>
					<i className="sidebarIcon fab fa-youtube-square"></i>
					<i className="sidebarIcon fab fa-github-square"></i>
					<i className="sidebarIcon fab fa-dribbble-square"></i>
					<i className="sidebarIcon fab fa-behance-square"></i>
					<i className="sidebarIcon fab fa-pinterest-square"></i>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
