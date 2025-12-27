import Link from "next/link";

export function PostList(props)
{
    const posts = props.posts

    return (
        <div className="post-list">
            {
                posts.map((post) => (
                    <h2 className="post-item" key={post.id}>
                        <Link href="/">{post.title}</Link>
                    </h2>
                ))
            }
        </div>
    )
}