import styles from './Page.module.scss';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './home/Home';
import Skills from './skills/Skills';
import Projects from './projects/projects';
import Contact from './contact/contact';

const Page: React.FC = () => {
    const routes: { path: string, label: string, element: JSX.Element }[] = [
        {
            path: '/',
            label: 'Home',
            element: <Home />,
        },
        {
            path: '/skills',
            label: 'My skills',
            element: <Skills />,
        },
        {
            path: '/projects',
            label: 'Projects',
            element: <Projects />,
        },
        {
            path: '/contact',
            label: 'Contact',
            element: <Contact />,
        },
    ];

    const getNavLink = (path: string, label: string) => <Link className={styles.list__link} to={path}>{label}</Link>;
    const getRoute = (path: string, element: JSX.Element) => <Route path={path} element={element} />;

    const renderNavLinks = () => routes.map(route => getNavLink(route.path, route.label));
    const renderRoutes = () => routes.map(route => getRoute(route.path, route.element));

    return (
        <Router>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    {renderNavLinks()}
                </ul>
            </nav>
            <Routes>
                {renderRoutes()}
            </Routes>
        </Router>
    );
};

export default Page;
