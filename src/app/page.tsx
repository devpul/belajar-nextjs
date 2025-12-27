import Image from "next/image";
import { PostList } from "@/components/PostList";
import { getLastPost } from "@/lib/api";


export default async function Home() {
  const posts = await getLastPost();

  return (
    <>
      <div className="main-heading">
        <h1>Welcome to NextJS</h1>
        <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis laborum labore consequatur sequi est omnis deserunt laboriosam voluptatibus doloremque error.</p>
      </div>

      <PostList posts={posts}></PostList>

    </>
  );
}