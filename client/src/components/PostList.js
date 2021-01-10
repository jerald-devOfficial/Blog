import React from "react";
import axios from "axios";
import PostListItem from "./PostListItem";

class PostList extends React.Component {
  // class Component is needed than function
  state = {
    posts: [],
  };

  componentDidMount() {
    this.getPosts();
  }

  async getPosts() {
    const res = await axios.get("/api/posts/");
    this.setState({ posts: res.data });
  }

  renderList() {
    return this.state.posts.map((post) => {
      return <PostListItem post={post} key={post._id} />;
    });
  }

  render() {
    return (
      <div className="min-h-screen  py-6 sm:py-12  bg-gray-100">
        <div className="relative py-3 sm:max-w-xl mt-16 sm:mt-13 sm:mx-auto ">
          <div className="post-list">{this.renderList()}</div>
        </div>
      </div>
    );
  }
}
export default PostList;
