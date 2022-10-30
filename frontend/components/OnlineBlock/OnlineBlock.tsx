import OnlineUsersCount from "./OnlineUsersCount";
import styles from './online-block.module.css'
import OnlineUsers from "./OnlineUsers";

export default function OnlineBlock() {
    return (
        <div className={styles.online_block}>
            <OnlineUsersCount />
            <OnlineUsers />
        </div>
    )
}