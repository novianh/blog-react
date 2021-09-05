import Home from "./pages/home/home";
import TopBar from "./components/topbar/TopBar";
import Setting from "./pages/settings/setting";
import Single from "./pages/single/single";
import Write from "./pages/write/write";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Post from "./components/post/post";

function App() {
	// validasi user atau bukan
	const user = true;
	return (
		<Router>
			<TopBar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/register">{user ? <Home /> : <Register />}</Route>
				<Route path="/login">{user ? <Home /> : <Login />}</Route>
				<Route path="/write">{user ? <Write /> : <Register />}</Route>
				<Route path="/setting">{user ? <Setting /> : <Register />}</Route>
				<Route path="/post/:postId">
					<Single />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
