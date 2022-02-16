import { useRouter } from "next/router";
import Header from "../../../components/Header";

export default function Post() {
    const router = useRouter();
    const {id} = router.query;

    return (
        <>
            <Header />
            <p>Id of this post: {id}</p>
        </>
    );
}
