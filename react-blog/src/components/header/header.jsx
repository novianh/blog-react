import "./header.css";

function Header() {
	return (
		<div className="header">
			<div className="headerTitles">
				<span className="headerTitleSm">React & Node</span>
				<span className="headerTitleLg">Blog</span>
			</div>
			<img
				src="https://images.pexels.com/photos/614710/pexels-photo-614710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
				alt="background header"
				className="headerImg"
			/>
		</div>
	);
} 

export default Header;
