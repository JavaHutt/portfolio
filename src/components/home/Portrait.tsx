import styles from './Portrait.module.scss';
import photo from '../../assets/photo.jpg';
import diamond from '../../assets/stickers/diamond.gif';
import duck from '../../assets/stickers/duck.png';
import scorpion from '../../assets/stickers/scorpion.png';

const Portrait: React.FC = () => (
    <section className={styles.portrait}>
        <div className={styles.card}>
            <img className={`${styles.card__sticker} ${styles.card__sticker_first}`} src={duck} alt="duck" />
            <img className={`${styles.card__sticker} ${styles.card__sticker_second}`} src={diamond} alt="diamond" />
            <img className={`${styles.card__sticker} ${styles.card__sticker_third}`} src={scorpion} alt="scorpion" />
            <img className={styles.card__image} src={photo} alt="alex" />
            <div className={styles.card__container}>
                <h4><strong>Alexander Karle</strong></h4>
            </div>
        </div>
    </section>
);

export default Portrait;
