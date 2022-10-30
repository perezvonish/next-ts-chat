import {Row, Statistic} from "antd";

export default function OnlineUsersCount() {
    return (
        <Row>
            <Statistic title="Users Online" value={1337} />
        </Row>
    )
}