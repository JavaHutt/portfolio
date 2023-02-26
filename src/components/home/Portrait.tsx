import styles from './Portrait.module.scss';
import photo from '../../assets/photo.jpg';

const Portrait: React.FC = () => (
    <section className={styles.portrait}>
        <div className={styles.card}>
            <img className={styles.card__image} src={photo} alt="alex" />
            <div className={styles.card__container}>
                <h4><strong>Alexander Karle</strong></h4>
            </div>
        </div>
    </section>
);

export default Portrait;
