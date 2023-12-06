import { Post } from "../Post";

import { Posts, Title } from "./styles";

export interface IPost {
  id: number;
  image: string;
  category: string;
  title: string;
  description: string;
  author: string;
  avatar: string;
  createdAt: string;
}

interface PostsProps {
  posts: IPost[];
}

export function PostList({ posts }: PostsProps) {
  console.log(posts);
  return (
    <>
      <Title>
        <h1>Posts Recentes</h1>
        <span>Escolhemos a dedo nossos artigos favoritos</span>
      </Title>

      <Posts>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </Posts>
    </>
  );
}
