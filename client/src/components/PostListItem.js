import React from "react";
import { Link } from "react-router-dom";

class PostListItem extends React.Component {
  renderDate(dateString) {
    const monthNames = ["January"];
    const date = new Date(dateString);

    return `${
      monthNames[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
  }

  renderTags(tags) {
    return tags.map((tag) => {
      return (
        <span className="tag" key={tag}>
          {tag}
        </span>
      );
    });
  }
  render() {
    const { post } = this.props;
    return (
      <Link to={`/posts/${post._id}`} className="post-list-item">
        {/* _id is a unique id from mongo */}
        <h3 className="title">{post.title}</h3>
        <span className="date">{this.renderDate(post.createdAt)}</span>
        <div className="tags">{this.renderTags(post.tags)}</div>
      </Link>
    );
  }
}
export default PostListItem;
