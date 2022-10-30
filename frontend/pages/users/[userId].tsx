import {useRouter} from "next/router";

export default function User() {
    const router = useRouter()

    return (
        <div>
            <h1>User id {router.query.userId}</h1>
        </div>
    )
}