import Navigation from "./Navigation";
import styles from './layout.module.css'

export default function Layout({children}) {
    return (
        <div className={styles.layout}>
            <div>
                <Navigation />
            </div>
            <div className={styles.layout_body}>
                {children}
            </div>
            <div className={styles.layout_footer}>
                <h1>
                    FOOTER
                </h1>
            </div>
        </div>
    )
}