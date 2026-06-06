
import { Post } from '@/model/post'

export async function generateStaticParams() {
  return [
    { post: '0-0-0-0-0' }
  ];
}

export default async function PostPage(
  { params }: { params: Promise<{ post: string }> }
) {
  const { post } = await params;
  const postModel = new Post('Default Title', new Date()); // TODO: fetch
  return <div>
    <h1>{postModel.title}</h1>
    <p>{postModel.body}</p>
  </div>
}
