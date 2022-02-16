import Header from "../../../components/Header";

export default function Post({title, body}) {
    return (
        <>
            <Header />
            <h1>Post: {title}</h1>
            <p>{body}</p>
        </>
    );
}

Post.getInitialProps = async ({query}) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${query.id}`);
    const post = res.json();

    return post;
}
