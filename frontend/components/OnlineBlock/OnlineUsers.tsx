import styles from './online-block.module.css'
import {Avatar, Card} from "antd";
import Meta from "antd/es/card/Meta";
import {UserOutlined} from "@ant-design/icons";

export default function OnlineUsers() {
    return (
        <div>
            <Card style={{ width: 300, marginTop: 16 }}>
                <Meta
                    avatar={<Avatar shape="square" size={64} icon={<UserOutlined />} />}
                    title="Card title"
                    description="This is the description"
                />
            </Card>
        </div>
    )
}