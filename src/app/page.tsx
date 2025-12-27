import Image from "next/image";
import Link from "next/link";

async function getLastPost()
{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  const posts = await res.json();
  return posts;
}

export default async function Home() {
  const posts = await getLastPost();

  return (
    <>
      <div className="main-heading">
        <h1>Welcome to NextJS</h1>
        <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis laborum labore consequatur sequi est omnis deserunt laboriosam voluptatibus doloremque error.</p>
      </div>

      <div className="post-list">
        {
          posts.map((post) => (
            <h2 className="post-item" key={post.id}>
              <Link href="/">{post.title}</Link>
            </h2>
          ))
        }
      </div>

    </>
  );
}