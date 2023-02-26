import styles from './SkillsList.module.scss';

interface SkillsListProps {
    title: string;
    list: string[];
}

const SkillsList: React.FC<SkillsListProps> = props => {
    const { title, list } = props;

    const renderListItems = () => list.map((item, index) => <li key={index} className={styles.text}>{item}</li>);

    return (
        <section className={styles['skills-list']}>
            <h2 className={styles.header}>{title}</h2>
            <ul>
                {renderListItems()}
            </ul>
        </section>
    );
};

export default SkillsList;
