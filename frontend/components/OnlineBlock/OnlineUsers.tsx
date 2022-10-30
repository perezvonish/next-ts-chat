import styles from './online-block.module.css'
import {Avatar, Card} from "antd";
import Meta from "antd/es/card/Meta";
import {UserOutlined} from "@ant-design/icons";

//todo map array of users from server

export default function OnlineUsers() {
    return (
            <Card className={styles.user_card}>
                <Meta
                    avatar={<Avatar shape="square" size={64} icon={<UserOutlined />} />}
                    title="Card title"
                    description="This is the description"
                />
            </Card>
    )
}