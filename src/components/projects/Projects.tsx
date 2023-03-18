import Project from './Project';
import styles from './Projects.module.scss';
import tempo from '../../assets/projects/tempo.png';

const Projects: React.FC = () => {
    const projects = [
        {
            title: 'Tempo EU',
            link: 'https://tempo.eu.com',
            image: tempo,
            text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Temporibus itaque iste, error, repellat magni dolorum modi pariatur fugiat cumque vel quidem?
            Molestiae inventore aperiam laboriosam maxime voluptate fugiat enim sapiente!'`,
        },
        {
            title: 'Tempo EU',
            link: 'https://tempo.eu.com',
            image: tempo,
            text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Temporibus itaque iste, error, repellat magni dolorum modi pariatur fugiat cumque vel quidem?
            Molestiae inventore aperiam laboriosam maxime voluptate fugiat enim sapiente!'`,
        },
        {
            title: 'Tempo EU',
            link: 'https://tempo.eu.com',
            image: tempo,
            text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Temporibus itaque iste, error, repellat magni dolorum modi pariatur fugiat cumque vel quidem?
            Molestiae inventore aperiam laboriosam maxime voluptate fugiat enim sapiente!'`,
        },
    ];

    const renderProjects = () => 
        projects.map(item =>
            <Project
                title={item.title}
                link={item.link}
                image={item.image}
                text={item.text}
            />
        );

    return (
        <div className={styles.projects}>
            {renderProjects()}
        </div>
    );
};

export default Projects;
