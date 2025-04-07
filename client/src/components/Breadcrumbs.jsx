import styles from '../css/Breadcrumbs.module.css'

function Breadcrumbs({current}) {
  return (
    <nav>
        <ul className={styles.breadcrumbs}>
            <li className={styles.blink}><a href="/">Home</a></li>
            <li className={styles.blink}><a href="/shop">Shop</a></li>
            <li className={styles.current}>{current}</li>
        </ul>
    </nav>
  );
}

export default Breadcrumbs;