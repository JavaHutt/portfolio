import styles from './LogosList.module.scss';

interface LogosListProps {
    logos: {
        name: string;
        width: string;
        height: string;
        alt: string;
    }[];
}

const LogosList: React.FC<LogosListProps> = props => {
    const { logos } = props;

    const renderLogos = () => 
        logos.map((item, index) =>
            <img 
                key={index}
                width={item.width}
                height={item.height}
                className={styles.logo}
                src={item.name}
                alt={item.alt}
            />
        );

    return (
        <section className={styles['logos-list']}>
            <ul className={styles['logos-list__list']}>
                {renderLogos()}
            </ul>
        </section>
    );
};

export default LogosList;
