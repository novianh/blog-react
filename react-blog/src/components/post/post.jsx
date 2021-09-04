import "./post.css";

function Post() {
	return (
		<div className="post">
			<img
				className="postImg"
				src="https://images.pexels.com/photos/7307618/pexels-photo-7307618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
				alt="post"
			/>

			<div className="postInfo">
				<div className="postCats">
					<span className="postCat">Matcha Life</span>
				</div>
				<span className="postTitle">Lorem ipsum dolor</span>
				<hr />
				<span className="postDate">12 hour ago</span>
			</div>
			<p className="postDesc">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga aliquam
				veniam iste natus veritatis magnam libero, harum quas ducimus nobis
				reiciendis porro dolorem explicabo, doloribus, incidunt magni velit vel
				enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ut
				quo odio nesciunt incidunt quia, temporibus optio. Ex vitae libero quis
				explicabo nihil mollitia nam temporibus? Sint dolore alias suscipit.
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
				quaerat, corporis veritatis quisquam nulla quod! Earum voluptates labore
				minima. Totam libero excepturi dolore molestiae, repudiandae delectus ut
				aliquam voluptatem sequi?
			</p>
		</div>
	);
}

export default Post;
