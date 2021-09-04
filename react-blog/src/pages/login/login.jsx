import "./login.css";

function Login() {
	return (
		<div className="login">
			<span className="loginTitle">Login</span>
			<form action="" className="loginForm">
				<label htmlFor="">Email</label>
				<input
					className="loginInput"
					type="email"
					name=""
					id=""
					placeholder="email@email.com"
				/>
				<label htmlFor="">Password</label>
				<input
					type="password"
					placeholder="Enter Your Password..."
					name=""
					id=""
					className="loginInput"
				/>
				<button className="loginButton">Login</button>
			</form>
			<button className="loginButton loginRegiterButton">Register</button>
		</div>
	);
}

export default Login;
