import styles from './Project.module.scss';

interface ProjectProps {
    title: string;
    link: string;
    image: string;
    text: string;
}

const Project: React.FC<ProjectProps> = props => {
    const { title, link, image, text } = props;

    const getTarget = (target: string) => `_${target}`;

    return (
        <div className={styles.project}>
            <div className={styles.picture}>
                <a href={link}  target={getTarget(title)}>
                    <img className={styles.picture__image} src={image} alt="tempo" />
                </a>
            </div>
            <div className={styles.description}>
                <h4 className={styles.description__header}>{title}</h4>
                <p className={styles.description__text}>{text}</p>
            </div>
        </div>
    );
};

export default Project;
