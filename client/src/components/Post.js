import React from "react";
import axios from "axios";

class Post extends React.Component {
  state = {
    post: {},
  };

  componentDidMount() {
    this.getPost();
  }

  async getPost() {
    const res = await axios.get(`/api/posts/${this.props.match.params.id}`);
    this.setState({ post: res.data });
  }

  renderHTML() {
    return { __html: this.state.post.html };
  }
  renderPost() {
    return <div dangerouslySetInnerHTML={this.renderHTML()}></div>;
  }
  render() {
    return (
      <div className="min-h-screen  py-6 sm:py-12  bg-gray-100">
        <div className="relative py-3 sm:max-w-xl mt-16 sm:mt-13 sm:mx-auto ">
          {this.renderPost()}
        </div>
      </div>
    );
  }
}

export default Post;
