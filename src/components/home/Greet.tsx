import styles from './Greet.module.scss';
import pikachu from '../../assets/pikachu.gif';

const Greet: React.FC = () => (
    <section className={styles.greet}>
        <div className={styles.text}>
            <h1 className={styles.header}>Hello!👋</h1>
            <p className={styles.bio}>My name is Alex</p>
            <p className={styles.bio}>I am a...</p>
        </div>
        <div>
            <div className={styles.badge}>
                <p className={styles.badge__text}>Backend Developer</p>
                <p className={styles.badge__text}>&</p>
                <p className={styles.badge__text}>
                    Frontend Developer
                    <span className={`${styles.badge__text} ${styles.badge__text_small}`}> (a little...)</span>
                </p>
                <img className={styles.badge__image} src={pikachu} alt="pikachu" />
            </div>
        </div>
    </section>
);

export default Greet;
