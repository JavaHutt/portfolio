import styles from './Home.module.scss';
import Greet from './Greet';
import Portrait from './Portrait';

const Home: React.FC = () => {
    return (
        <div className={styles.home}>
            <Greet />
            <Portrait />
        </div>
    );
};

export default Home;
