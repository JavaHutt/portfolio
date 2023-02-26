import styles from './Menu.module.scss';

const Menu: React.FC = () => (
    <nav className={styles.nav}>
        <ul className={styles.list}>
            <li><a className={styles.list__link} href="#">Home</a></li>
            <li><a className={styles.list__link} href="#">My skills</a></li>
            <li><a className={styles.list__link} href="#">Projects</a></li>
            <li><a className={styles.list__link} href="#">Contact</a></li>
        </ul>
    </nav>
);

export default Menu;
