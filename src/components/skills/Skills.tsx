import SkillsList from './SkillsList';
import styles from './Skills.module.scss';

const Skills: React.FC = () => {
    const backendSkills = {
        title: 'Backend:',
        skills: ['Go', 'PostgreSQL', 'AWS'],
    };

    return (
        <div className={styles.skills}>
            <div className={styles.skills__item}>
                <SkillsList title={backendSkills.title} list={backendSkills.skills} />
            </div>
            <div className={styles.skills__item}>
                <SkillsList title={backendSkills.title} list={backendSkills.skills} />
            </div>
            <div className={styles.skills__item}>
                <SkillsList title={backendSkills.title} list={backendSkills.skills} />
            </div>
            <div className={styles.skills__item}>
                <SkillsList title={backendSkills.title} list={backendSkills.skills} />
            </div>
        </div>
    );
};

export default Skills;
