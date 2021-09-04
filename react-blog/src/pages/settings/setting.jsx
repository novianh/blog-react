import "./setting.css";
import Sidebar from "../../components/sidebar/sidebar";

function Setting() {
	return (
		<div className="setting">
			<div className="settingWrapper">
				<div className="settingTitle">
					<span className="settingUpdateTitle">Edit Your Account</span>
					<span className="settingDeleteTitle">Delete Account</span>
				</div>
				<form action="" className="settingForm">
					<label htmlFor="">Profile Picture</label>
					<div className="settingPP">
						<img
							src="https://images.unsplash.com/photo-1515191107209-c28698631303?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
							alt=""
						/>
						<label htmlFor="fileInput">
							<i className="settingPPIcon far fa-user-circle"></i>
						</label>
						<input type="file" id="fileInput" style={{ display: "none" }} />
					</div>
					<label>Username</label>
					<input type="text" placeholder="Bibi" />
					<label>Email</label>
					<input type="email" placeholder="123@email.com" />
					<label>Password</label>
					<input type="password" />
					<button className="settingSubmit">Update</button>
				</form>
			</div>
			<Sidebar />
		</div>
	);
}

export default Setting;
