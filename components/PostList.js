import Link from "next/link"

export default function PostList({posts}) {

    return (
        <div className="posts-list">
            {posts.slice(0, 10).map( (post, index) => (
                <p key={index}>
                    <Link as={`/post/${post.id}`} href="post/[id]">
                        <a>{post.title}</a>
                    </Link>
                </p>
            ))}
        </div>
    )
}
