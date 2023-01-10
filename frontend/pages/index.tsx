import {Col, Row} from "antd";
import OnlineBlock from "../components/OnlineBlock/OnlineBlock";
import NewsBlock from "../components/NewsBlock/NewsBlock";
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
      <Row className={styles.main_row}>
          <Col span={24}>
              <NewsBlock />
          </Col>
      </Row>
  )
}
