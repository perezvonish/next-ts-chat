import {Button} from "antd";
import Link from "next/link";

export default function NotFoundPage() {
    return (
        <div>
            <h1>
                PAGE NOT FOUND: 404
            </h1>
            <h1>
                GO TO SAFE ZONE --> <Link href={'/'}>HOME</Link>
            </h1>
        </div>
    )
}