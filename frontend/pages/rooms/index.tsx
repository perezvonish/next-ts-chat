import {Col, Row, Statistic} from "antd";
import styles from '../../styles/rooms.module.css'
import RoomPreview from "../../components/RoomBlock/RoomPreview";

export default function Rooms() {
    return (
        <Row className={styles.room_page}>
            <Col span={8}>
                <Statistic title="Rooms available" value={15} />
            </Col>
            <Col span={16}>
                <RoomPreview/>
            </Col>
        </Row>
    )
}