import { IPost } from "../PostList";

import { PostItem } from "./styles";

interface PostProps {
  post: IPost;
}

export function Post({ post }: PostProps) {
  return (
    <PostItem>
      <img src={post.image} alt="" />
      <p className="category">
        <span>in</span> {post.category}
      </p>
      <h2 className="title">{post.title}</h2>
      <div className="post-info">
        <img src={post.avatar} alt="" />
        <div>
          <span className="author">{post.author}</span>
          <span>{post.createdAt}</span>
        </div>
      </div>
      <p className="description">{post.description}</p>
    </PostItem>
  );
}
