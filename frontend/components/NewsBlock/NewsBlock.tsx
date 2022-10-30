import SearchNews from "./SearchNews";
import styles from './search.module.css'
import {Row} from "antd";

export default function NewsBlock() {
    return (
        <Row className={styles.news_block}>
            <SearchNews />
        </Row>
    )
}