import SkillsList from './SkillsList';
import styles from './Skills.module.scss';
import LogosList from './LogosList';
import angular from '../../assets/logos/angular.png';
import aws from '../../assets/logos/aws.png';
import docker from '../../assets/logos/docker.png';
import golang from '../../assets/logos/golang.png';
import kafka from '../../assets/logos/kafka.png';
import postgres from '../../assets/logos/postgres.png';
import react from '../../assets/logos/react.png';
import redux from '../../assets/logos/redux.png';

const Skills: React.FC = () => {
    const backendSkills = {
        title: 'Backend:',
        skills: ['Go', 'PostgreSQL', 'AWS', 'Docker', 'Kafka'],
    };

    const frontendSkills = {
        title: 'Frontend:',
        skills: ['React', 'Redux', 'Angular'],
    };

    const backendLogos = [
        {
            name: golang,
            width: '200px',
            height: '140px',
        },
        {
            name: postgres,
            width: '140px',
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
            width: '240px',
            height: '130px',
        },
    ];

    const frontendLogos = [
        {
            name: react,
            width: '160px',
            height: '150px',
        },
        {
            name: redux,
            width: '160px',
            height: '150px',
        },
        {
            name: angular,
            width: '150px',
            height: '150px',
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
                <LogosList logos={frontendLogos} />
            </div>
            <div className={styles.skills__item}>
                <SkillsList title={frontendSkills.title} list={frontendSkills.skills} />
            </div>
        </div>
    );
};

export default Skills;
