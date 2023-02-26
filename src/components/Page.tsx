import styles from './Page.module.scss';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './home/Home';
import Skills from './skills/Skills';
import Projects from './projects/projects';
import Contact from './contact/contact';

const Page: React.FC = () => {
    const getNavLink = (path: string, label: string) => <Link className={styles.list__link} to={path}>{label}</Link>;

    return (
        <Router>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    {getNavLink('/', 'Home')}
                    {getNavLink('/skills', 'My skills')}
                    {getNavLink('/projects', 'Projects')}
                    {getNavLink('/contact', 'Contact')}
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
};

export default Page;
