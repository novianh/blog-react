import "./register.css";

function Register() {
	return (
		<div className="register">
			<span className="registerTitle">Register</span>
			<form action="" className="registerForm">
				<label htmlFor="">Username</label>
				<input
					className="registerInput"
					type="text"
					name=""
					id=""
					placeholder="Enter Your Username..."
				/>
				<label htmlFor="">Email</label>
				<input
					className="registerInput"
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
					className="registerInput"
				/>
				<button className="registerButton">Register</button>
			</form>
			<button className="registerButton registerLoginButton">Login</button>
		</div>
	);
}

export default Register;
