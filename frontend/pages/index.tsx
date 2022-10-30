import {Col, Row} from "antd";
import OnlineBlock from "../components/OnlineBlock/OnlineBlock";
import NewsBlock from "../components/NewsBlock/NewsBlock";
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
      <Row className={styles.main_row}>
          <Col span={8}>
              <OnlineBlock />
          </Col>
          <Col span={16}>
              <NewsBlock />
          </Col>
      </Row>
  )
}
