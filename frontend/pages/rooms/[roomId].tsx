import {useRouter} from "next/router";

export default function Room() {
    const router = useRouter()

    return (
        <div>
            <h1>
                Room id: {router.query.roomId}
            </h1>
        </div>
    )
}