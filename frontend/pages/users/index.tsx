import {Col, Row} from "antd";
import OnlineBlock from "../../components/OnlineBlock/OnlineBlock";
import OnlineUsers from "../../components/OnlineBlock/OnlineUsers";
import styles from '../../components/OnlineBlock/online-block.module.css'

export default function Users() {
    return (
        <Row>
            <Col span={8}>
                <OnlineBlock />
            </Col>
            <Col span={16} className={styles.users}>
                <OnlineUsers />
                <OnlineUsers />
                <OnlineUsers />
                <OnlineUsers />
                <OnlineUsers />
                <OnlineUsers />
            </Col>
        </Row>
    )
}