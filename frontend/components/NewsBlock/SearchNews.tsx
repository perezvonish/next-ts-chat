import {Col, Input, Row} from "antd";
import styles from './search.module.css'

const { Search } = Input;

export default function SearchNews() {
    return (
        <Row className={styles.search_row}>
            <Col span={8}>
                <Search
                    className={styles.search_col}
                    placeholder="Search by title"
                    allowClear
                    enterButton="Search"
                    size="large"
                />
            </Col>
            <Col span={8}>
                <Search
                    className={styles.search_col}
                    placeholder="Search by user"
                    allowClear
                    enterButton="Search"
                    size="large"
                />
            </Col>
        </Row>
    )
}