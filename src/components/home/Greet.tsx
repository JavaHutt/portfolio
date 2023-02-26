import styles from './Greet.module.scss';

const Greet: React.FC = () => (
    <div className={styles.greet}>
        <div className={styles.text}>
            <h1 className={styles.header}>Hello!👋</h1>
            <p className={styles.bio}>My name is Alex</p>
            <p className={styles.bio}>I am a...</p>
        </div>
        <div>
            <div className={styles.badge}>
                <p>Backend Developer</p>
                <p>&</p>
                <p>Frontent Developer</p>
            </div>
        </div>
    </div>
);

export default Greet;
