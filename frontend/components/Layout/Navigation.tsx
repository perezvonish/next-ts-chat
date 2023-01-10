import {Button, Col, Row} from "antd";
import styles from './layout.module.css'
import 'antd/dist/antd.css'
import Link from "next/link";

export default function Navigation() {
    return (
        <Row className={styles.navigation}>
            <Col span={4}>
                <Link href={'/'}>
                    <Button className={styles.navigation_button}>Home</Button>
                </Link>
            </Col>
            <Col span={4}>
                <Link href={'/users'}>
                    <Button className={styles.navigation_button}>Users</Button>
                </Link>
            </Col>
            <Col span={4}>
                <Link href={'/rooms'}>
                    <Button className={styles.navigation_button}>Rooms</Button>
                </Link>
            </Col>
            <Col span={4}>
                <Link href={'/account'}>
                    <Button className={styles.navigation_button}>Account</Button>
                </Link>
            </Col>
        </Row>
    )
}