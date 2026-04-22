
import { Post } from '../model/post'

export function PostPage(post: Post) {
  return <div>
    <h1>{post.title}</h1>
    {post.body}
  </div>
}
