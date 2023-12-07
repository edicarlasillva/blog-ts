import { IPost } from '../PostList'

import { PostItem } from './styles'

interface PostProps {
  post: IPost
}

export function Post({ post }: PostProps) {
  const { author, avatar, category, createdAt, description, image, title } =
    post
  return (
    <PostItem category={category}>
      <img src={image} alt="" />
      <p className="category">
        <span>in</span> {category}
      </p>
      <h2 className="title">{title}</h2>
      <div className="post-info">
        <img src={avatar} alt="" />
        <div>
          <span className="author">{author}</span>
          <span>{createdAt}</span>
        </div>
      </div>
      <p className="description">{description}</p>
    </PostItem>
  )
}
