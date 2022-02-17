import Link from "next/link";
import PostList from "./PostList";

export default function Sidebar({posts}) {
    const allPosts = posts.data;

    return (
        <aside>
            <h3>Recent Posts</h3>

            <PostList posts={allPosts} />

        </aside>
    )
}
