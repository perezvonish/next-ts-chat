import {useRouter} from "next/router";

export default function New() {
    const router = useRouter()

    return (
        <div>
            <h1>New id: {router.query.newId}</h1>
        </div>
    )
}