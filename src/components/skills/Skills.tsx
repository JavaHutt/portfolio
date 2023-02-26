import SkillsList from './SkillsList';
import styles from './Skills.module.scss';
import LogosList from './LogosList';
import aws from '../../assets/logos/aws.png';
import docker from '../../assets/logos/docker.png';
import golang from '../../assets/logos/golang.png';
import kafka from '../../assets/logos/kafka.png';
import postgres from '../../assets/logos/postgres.png';

const Skills: React.FC = () => {
    const backendSkills = {
        title: 'Backend:',
        skills: ['Go', 'PostgreSQL', 'AWS'],
    };
    // golang,postgres,aws,docker,kafka
    const backendLogos = [
        {
            name: golang,
            width: '200px',
            height: '140px',
        },
        {
            name: postgres,
            width: '160px',
            height: '150px',
        },
        {
            name: aws,
            width: '140px',
            height: '110px',
        },
        {
            name: docker,
            width: '180px',
            height: '150px',
        },
        {
            name: kafka,
            width: '220px',
            height: '130px',
        },
    ];

    return (
        <div className={styles.skills}>
            <div className={styles.skills__item}>
                <SkillsList title={backendSkills.title} list={backendSkills.skills} />
            </div>
            <div className={styles.skills__item}>
                <LogosList logos={backendLogos} />
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
